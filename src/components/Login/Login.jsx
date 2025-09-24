import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../Firebase/Firebase.init";
const Login = () => {
 const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
  .then((result) => {
    console.log(result);
  }).catch((error) => {
    console.log(error);
  });
  };
  return (
    <div>
      <h1>Please Login</h1>
      <button onClick={handleGoogleSignIn}>sign In With Google</button>
    </div>
  );
};

export default Login;
