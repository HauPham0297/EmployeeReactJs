// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBffpoDjlkVwaYL_qpN-f8i_n9W_72eiPE",
  authDomain: "myreactproject-33ddc.firebaseapp.com",
  projectId: "myreactproject-33ddc",
  storageBucket: "myreactproject-33ddc.appspot.com",
  messagingSenderId: "655351370904",
  appId: "1:655351370904:web:b5cf59f179339f668f6ced",
  measurementId: "G-WKETJ078C5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);