import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Dash from "./components/dash";
import User from "./components/user";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";

function App() {
  
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            email: authUser.email,
            displayName: authUser.displayName,
            photo: authUser.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    
    });
  }, [dispatch]);
  let nie = "";
  if (user) {
    const email = user.email.split("@");
    if (email[1] === "nie.ac.in") {
      nie = "good";
    }
  }
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Dash />} />
          <Route path='/login' element={<Login />} />
          <Route path={nie ? "/adduser" : "/"} element={<User />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
