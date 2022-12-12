import React from "react";
import { useSelector } from "react-redux";
import "./Nien.css";
import { Link } from "react-router-dom";
import { auth } from ".././firebase";
import { selectUser } from "../features/userSlice";

function Nien() {
  const user = useSelector(selectUser);
  if (user) {
    const email = user.email.split("@");
    if (email[1] !== "nie.ac.in") {
      auth.signOut();
    }
  }

  return (
    <div className='nie'>
      <div className='nieStud'>
        This Pages are only for NIE STUDENTS if you had nie account then click
        Login
        <Link to='/login'>
          <p className='botton'>{" Login"}</p>
        </Link>
      </div>
      <div className='nonnie'>
        If you are not NIE STUDENT then you can got to BookReccomandation page
        click here 👉 <a href='https://manoj-c-s-book-recommendation-app-j297f8.streamlit.app/' target="_blank" rel="noreferrer" >📚</a>
      </div>{" "}
    </div>
  );
}

export default Nien;
