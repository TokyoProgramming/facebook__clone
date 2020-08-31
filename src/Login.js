import React from 'react';
import './Login.css';
import {Button} from "@material-ui/core";
import {auth, provider} from "./Firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login (){

    const [state, dispach] =useStateValue();

    const signIn = () => {
    //    SignIn
        auth.signInWithPopup(provider)
            .then((result) => {
                dispach({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
            })
            .catch((error) => alert(error.message));
    };
    return(
        <div className="login">
            <div className="login__logo">
                <img
                    src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"
                    alt=""
                />
                <img
                    src="https://cdn.pixabay.com/photo/2013/01/29/22/06/facebook-76658__340.png"
                    alt=""
                />
                <Button type="submit" onClick={signIn}>Sign In</Button>

            </div>
        </div>
    );
}

export default Login;
