import React, { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, GithubAuthProvider } from "firebase/auth";
import app from '../firebase/firebase.init';
const Login = () => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedUser = result.user
                setUser(loggedUser)
                console.log(loggedUser)
            })
            .catch(error => {
                console.log('errror', error.message)
            })
    }
    const handleGithubLogin = () => {
        signInWithPopup(auth, githubProvider)
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
                :
                <div className="flex gap-5">
                    <button className='btn btn-primary' onClick={() => handleGoogleSignIn()}>Google login</button>
                    <button className='btn btn-primary' onClick={() => handleGithubLogin()}>Github login</button>
                </div>
            }

            {user && <div>
                <h3>{user?.displayName}</h3>
                <img src={user.photoURL} alt="user photo" />
            </div>}
        </div>

    );
};

export default Login;