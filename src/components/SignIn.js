import { Button } from '@mui/material'
import React from 'react'
import firebase from "firebase/compat/app";
import {auth} from "../firebase.js"

const SignIn = () => {

    function signin_google(){
        const provider= new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return (
        <div>
            <Button onClick={signin_google}>グーグルでログインする</Button>
        </div>
    )
}

export default SignIn