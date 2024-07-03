import React from "react";
import { auth, googleProvider, linkedinProvider } from "../firebase";

const Login = () => {
    const signInWithGoogle = () => {
        auth.signInWithPopup(googleProvider)
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const signInWithLinkedIn = () => {
        auth.signInWithPopup(linkedinProvider)
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const signInWithEmail = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        auth.signInWithEmailAndPassword(email, password)
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const signUpWithEmail = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        auth.createUserWithEmailAndPassword(email, password)
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div>
            <button onClick={signInWithGoogle}>Sign in with Google</button>
            <button onClick={signInWithLinkedIn}>Sign in with LinkedIn</button>
            <form onSubmit={signInWithEmail}>
                <input type="email" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <button type="submit">Sign in with Email</button>
            </form>
            <form onSubmit={signUpWithEmail}>
                <input type="email" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <button type="submit">Sign up with Email</button>
            </form>
        </div>
    );
};

export default Login;
