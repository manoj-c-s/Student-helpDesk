import {React} from "react";
import Main from "./main";
import Nien from "./Nien.js";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import 'react-toastify/dist/ReactToastify.css';
function Dash() {
  const user = useSelector(selectUser);
  let nie="";
  if(user){
  const email=user.email.split('@');

  if(email[1]==='nie.ac.in'){
    nie="good";
  }
 } 
  return <div className='dash'>{nie ? <Main /> : <Nien />}</div>;
}

export default Dash;
