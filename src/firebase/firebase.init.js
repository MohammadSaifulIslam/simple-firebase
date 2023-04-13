// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2OXONOboz2_mwxSYQnG0_x9-KV1-U_ko",
  authDomain: "simple-firebase-2c9b3.firebaseapp.com",
  projectId: "simple-firebase-2c9b3",
  storageBucket: "simple-firebase-2c9b3.appspot.com",
  messagingSenderId: "286236490383",
  appId: "1:286236490383:web:1b00cea18cffb7d7e2cefa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app