/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { login, logout, selectUser } from "./features/userSlice";
import Feed from "./Feed";
import { auth } from "./firebase";
import Footer from "./Footer";
import Header from "./Header";
import Login from "./Login";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";

function App() {
  // pull user object out from REDUX, see src/features/userSlice/Selectors
  const user = useSelector(selectUser);
  // REDUX
  const dispatch = useDispatch();

  // persist user log in to Firebase from app redux state
  // onAuthChange is a listener that listens for any change in Auth state, login, logout, did the user change?
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // user is logged in - assign Firebase userAuth props to our REDUX user
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        // user is logged out
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      {/* Header */}
      <Header />

      {/* we will use redux here for storing the user after authentication 
          because in our app we will need the user at many places so instead 
          of passing as a prop to many places and run into prop drilling ,
          we will use redux in a similar way as of context api.
      */}

      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
          {/* Footer for Mobile only*/}
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
