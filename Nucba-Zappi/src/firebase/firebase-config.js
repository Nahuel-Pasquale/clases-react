export const firebaseConfig = {
  apiKey: "AIzaSyBbF2MrsLhqRTj9vwbFUp4GPbwVw887r5U",
  authDomain: "nucba-zappi-d224b.firebaseapp.com",
  projectId: "nucba-zappi-d224b",
  storageBucket: "nucba-zappi-d224b.appspot.com",
  messagingSenderId: "345367748893",
  appId: "1:345367748893:web:867dc2cda95ca655c141f4"
};
// project-345367748893


export const actionCodeSettingsVerification = {
  url: 
    process.env.NODE_ENV === 'development'
      ? 'https://localhost:3000/'
      : 'https://localhost:3000/login' 
};

export const actionCodeSettingsForgotPassword = {
  url: 
    process.env.NODE_ENV === 'development'
      ? 'https://localhost:3000/login'
      : 'https://localhost:3000/login'
};