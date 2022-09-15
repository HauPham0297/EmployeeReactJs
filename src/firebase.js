import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCVtdIMudePqN7BYe6oGzfdDCXcZMhL3hY",
  authDomain: "firstapplication-3c2ab.firebaseapp.com",
  projectId: "firstapplication-3c2ab",
  storageBucket: "firstapplication-3c2ab.appspot.com",
  messagingSenderId: "272832472525",
  appId: "1:272832472525:web:abb7bda7b7434efe331084",
  measurementId: "G-HPR1LDE33L"
}

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export {db}