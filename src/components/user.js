import React, { useState } from "react";
import "./user.css";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { toast, ToastContainer } from "react-toastify";
import db from "../firebase";

import Header from "./Header";

function User() {
  const user = useSelector(selectUser);
  const [allDoc, setDoc] = useState([]);

  function getuser(e) {
    e.preventDefault();
    setDoc([]);
    db.collection("users")
      .get()
      .then((querSnapshot) => {
        querSnapshot.docs.forEach((doc) => {
          setDoc((prev) => {
            return [...prev, doc.data()];
          });
        });
        console.log(allDoc);
      });
  }

  const adduser = () => {
    db.collection("users").add({
      name:user.displayName?user.displayName: user.email.substring(0, user.email.length - 10),
      email: user.email,
      id: user.uid,
    });
    // console.log("user added");
  };
  const Btn = () => {
    return (
      <div className='alert'>
        <p>First time Login Please click add user button</p>
        <button onClick={adduser}>Add User</button>
      </div>
    );
  };
  const notify = () => {
    toast.warn(<Btn />, {
      autoClose: 5000,
    });
  };

  return (
    <div>
      <Header />
      <button className='icon' onChange={notify()} />

      <ToastContainer />
      <div className='dis'>
        <button onClick={getuser}>Display Users</button>
      </div>
      {allDoc.map((Doc) => {
        return (
          <div className="table">
            <h1>Name : {Doc.name}</h1>
            <h1>Email : {Doc.email}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default User;
