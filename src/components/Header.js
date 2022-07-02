import React from "react";

import Modal from "react-modal";
import logo from "../img/logo.jpg";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { googleProvider } from "../firebase";

Modal.setAppElement("#root");

function QHeader() {
  console.log(googleProvider);
  const user = useSelector(selectUser);
  console.log(user);

  return (
    <div className='sticky'>
      <nav>
        <div class='logo'>
          <div className='image'>
            <img src={logo} alt='' />
          </div>
          <div className="he">
          Student HelpDesk</div>
        </div>
        <input type='checkbox' id='click' className="check" />

        <ul>
          <li>
            <a href='http://localhost:8501/' target='_blank' rel="noreferrer" >
              Book recommandation
            </a>
          </li>
          <li>
            {" "}
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/adduser'>Adduser</Link>
          </li>
          <li>
            <Link to='/login' onClick={() => auth.signOut()}>
              Logout
            </Link>
          </li>

          <li className='avth'>
            {" "}
            <Avatar>
              {" "}
              <img
                className='avt'
                src={
                  user.photo
                    ? user.photo
                    : "https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
                }
                alt=''
              />{" "}
            </Avatar>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default QHeader;
