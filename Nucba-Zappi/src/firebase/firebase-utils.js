import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { actionCodeSettingsForgotPassword, actionCodeSettingsVerification, firebaseConfig } from "./firebase-config";
import {
  doc,
  getDoc,
  getDocs,
  setDoc,
  getFirestore,
  collection,
  query,
  where,
  orderBy,
  onSnapshot,
} from 'firebase/firestore';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// firestore functions
export const firestore = getFirestore(app);


export const createUserProfileDocument = async userAuth => {

  if(!userAuth || !userAuth.emailVerified) return;

  const userRef = doc(firestore, `users/${userAuth.uid}`)
  console.log('userRef ==> ', userRef);
  const snapShot = await getDoc(userRef);

  if(!snapShot.exists()) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(doc(firestore, `users/${userAuth.uid}`), {
        displayName: displayName || localStorage.getItem('username'),
        email,
        photoURL,
        createdAt
      });
    } catch (error) {
      console.log(error);
    }
  }
  return userRef;
};

export const createOrderDocument = async order => {
  if (!order) return;
  const orderRef = doc(firestore, `orders/${order.orderId}`);
  const snapShot = await getDoc(orderRef);

  if (!snapShot.exists()) {
    const createdAt = new Date();

    try {
      await setDoc(doc(firestore, `orders/${order.orderId}`), {
        userId: order.userId,
        shippingDetails: {
          ...order.shippingDetails,
        },
        items: [...order.cartItems],
        price: order.price,
        shippingCost: order.shippingCost,
        total: order.total,
        status: 'pending',
        createdAt,
      });
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }
  return orderRef;
};

export const getOrders = async (userId, currentOrdersInRedux, cb, action) => {
  if (!userId) throw new Error('');

  const getOrdersQuery = query(
    collection(firestore, 'orders'),
    where('userId', '==', userId),
    orderBy('createdAt', 'desc')
  );

  let orders = await getDocs(getOrdersQuery)
    .then(querySnapshot => {
      let orders = [];
      querySnapshot.forEach(async document => {
        orders = [...orders, { id: document.id, ...document.data() }];
        const orderRef = doc(firestore, `orders/${document.id}`);

        let documentStatus = document.data().status;
        if (!currentOrdersInRedux) {
          onSnapshot(orderRef, snapShot => {
            const staleData = snapShot.get('status') !== documentStatus;
            documentStatus = snapShot.get('status');
            staleData && cb(action(userId));
          });
        }
      });

      return orders;
    })
    .catch(error => console.error('Error al obtener las ordenes', error));

  return orders;
};

export const auth = getAuth();

console.log('auth ==> ', auth);

auth.useDeviceLanguage();

export const createUser = (email, password, displayName) => 
  createUserWithEmailAndPassword(auth, email, password).then(
    userCredencial => 
      sendEmailVerification(
        userCredencial.user,
        actionCodeSettingsVerification
      ).then(() => {
        alert(`Mensaje de verificacion enviado al mail ${email}`);
        localStorage.setItem('username', displayName);
      })
  );

export const signInUser = (email, password) => 
      signInWithEmailAndPassword(auth, email, password);

export const resetPassword = email => 
      sendPasswordResetEmail(auth, email, actionCodeSettingsForgotPassword).then(
        () => alert(`Mensaje de verificacion enviado al mail ${email}`)
      );

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, provider);
