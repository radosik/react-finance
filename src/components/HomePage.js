import React from "react";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
} from "@react-firebase/auth";
import firebase from "firebase/app";

const HomePage = () => {
  return (
    <div className="container">
      <h1>FinanceControl</h1>
      <FirebaseAuthProvider firebase={firebase}>
        <div>
          <FirebaseAuthConsumer>
            {({ isSignedIn, firebase }) => {
              if (isSignedIn === true) {
                return (
                  <div>
                    <h2>You're signed in</h2>
                    <button
                      className="btn btn-dark"
                      onClick={() => {
                        firebase.app().auth().signOut();
                      }}
                    >
                      Sign out
                    </button>
                  </div>
                );
              } else {
                return (
                  <div>
                    <h2>You're not signed in </h2>
                    <button
                      className="btn btn-dark"
                      onClick={() => {
                        const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
                        firebase.auth().signInWithPopup(googleAuthProvider);
                      }}
                    >
                      Sign in Google
                    </button>
                  </div>
                );
              }
            }}
          </FirebaseAuthConsumer>
        </div>
      </FirebaseAuthProvider>
      <div>
        <form action="/home">
          <button className="btn btn-dark">Home</button>
        </form>
        <form action="/shops">
          <button className="btn btn-dark">Shops</button>
        </form>
        <form action="/receiptForm">
          <button className="btn btn-dark">Edit Receipt</button>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
