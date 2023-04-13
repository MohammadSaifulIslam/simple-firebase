import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from '../firebase/firebase.init';
const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () =>{
       signInWithPopup(auth, provider)
       .then(result => {
        console.log(result.user)
       })
       .catch(error => {
        console.log('errror' , error.message)
       })
        }
    return (
        <div>
          <button onClick={()=>handleGoogleSignIn()}>Google Login</button>
        </div>
    );
};

export default Login;