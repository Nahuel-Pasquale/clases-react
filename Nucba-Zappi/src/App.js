import React, { useEffect } from 'react';

import Routes from './routes/Routes';

import Layout from './components/Layout/Layout';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, createUserProfileDocument } from './firebase/firebase-utils';
import { onSnapshot } from 'firebase/firestore';
import * as userActions from './redux/user/user-actions';
import { useDispatch } from 'react-redux';

function onAuthStateChange(cb, action){
  onAuthStateChanged(auth, async userAuth => {
    if(userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      onSnapshot(userRef, snapShot => 
        cb(action({ id: snapShot.id, ...snapShot.data() })))
    } else {
      cb(action(null));
    }
  })
}

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    // const unsuscribe = onAuthStateChange(dispatch, userActions.setCurrentUser);
    return () => onAuthStateChange(dispatch, userActions.setCurrentUser);
  }, [dispatch]);

  return (
    <Layout>
      <Navbar />
      <Routes />
      <Footer />
    </Layout>
  );
}

export default App;
