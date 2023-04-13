import React, { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import app from '../firebase/firebase.init';
const Login = () => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const loggedUser = result.user
                setUser(loggedUser)
                console.log(loggedUser)
            })
            .catch(error => {
                console.log('errror', error.message)
            })
    }
    const handleLogOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result)
                setUser(null)
            })
            .then(error => {
                console.log(error)
            })
    }
    return (
        <div className='mt-5'>
            {user ?
                <button className='btn btn-error ml-5' onClick={() => handleLogOut()}>Logout</button>
                : <button className='btn btn-primary' onClick={() => handleGoogleSignIn()}>Login</button>}

            {user && <div>
                <h3>{user?.displayName}</h3>
                <img src={user.photoURL} alt="user photo" />
            </div>}
        </div>

    );
};

export default Login;