import React, { useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.init";

const Login = () => {
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();
  const provider2 = new GithubAuthProvider();

  const handleGoogleSingIn = () => {
    console.log("google sing in");

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGithubSingIn = () => {
    console.log("google sing in");

    signInWithPopup(auth, provider2)
      .then((result) => {
        setUser(result.user)
        
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSingOut = () => {
    console.log("object");
    signOut(auth)
      .then(() => {
        console.log("singOut Complete");
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };



  return (
    <div>
      <h2>Please Login</h2>

      {user ? (
        <button onClick={handleSingOut}>SingOut</button>
      ) : (
      <>
      <button onClick={handleGoogleSingIn}>Sing In With Google</button>
      <button onClick={handleGithubSingIn}>Sing In With Github</button>
      
      </>
      )}
      {user && (
        <div>
          <h3>{user.displayName}</h3>
          <h3>{user.email}</h3>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
