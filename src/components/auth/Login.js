import React from "react";
import logo from "../../img/logo.jpg";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../../firebase";

function Login() {
  const navigate = useNavigate();

  const GoogleSignIn = (e) => {
    e.preventDefault();
    console.log(googleProvider);
    auth.signInWithPopup(googleProvider).catch((e) => {
      alert(e.message);
    });
    navigate("/");
  };


  return (
    <div className='login'>
      <div className='container'>
        <div className='logo'>
          <img src={logo} alt='' />
          <p>WELCOME TO STUDENTS HELPDESK</p>
        </div>

        <div className='authOptions'>
          <div className='authOption'>
            <img
              className='googleAuth'
              src='https://media-public.canva.com/MADnBiAubGA/3/screen.svg'
              alt=''
            />
            <p onClick={GoogleSignIn}>Login With Google</p>
          </div>
     
         
        </div>
      </div>
    </div>
  );
}

export default Login;
