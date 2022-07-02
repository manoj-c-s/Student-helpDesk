import { Avatar } from "@material-ui/core";
import React,{useState} from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import "./Box.css";
import Modal from "react-modal";
import db from "../firebase";
import { Button, Input } from "@material-ui/core";
import firebase from "firebase/compat/app";

export default function QuorBox() {
  const user = useSelector(selectUser);
  const [IsmodalOpen, setIsModalOpen] = useState(false);
  const [input, setInput] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const questionName = input;

  const handleQuestion = (e) => {
    e.preventDefault();
    setIsModalOpen(false);

    if (questionName) {
      db.collection("questions").add({
        user: user,
        question: input,
        imageUrl: inputUrl,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }

    setInput("");
    setInputUrl("");
  };

  return (
    <div className='Box'>
      <div><div className='Box_info'>
        <Avatar
          src={
            user.photo
              ? user.photo
              : "https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
          }
          className='Box_infoAvatar'
        />
        <h5>
          Welcome{" "}
          {user.displayName
            ? user.displayName
            : user.email.substring(0, user.email.length - 10)}
        </h5>
      </div>
      <div className='Box_quora'>
        <p> To post question or link, Click on Add Question button</p>
      </div></div>
      <div className='mod'>
        <Button onClick={() => setIsModalOpen(true)}>Add Question</Button>
      

        <Modal
          isOpen={IsmodalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          shouldCloseOnOverlayClick={false}
          style={{
            overlay: {
              width: 700,
              height: 600,
              backgroundColor: "rgba(0,0,0,0.8)",
              zIndex: "1000",
              top: "50%",
              left: "50%",
              marginTop: "-300px",
              marginLeft: "-350px",
            },
          }}
        >
          <div className='mod_title'>
            <h5>Add Question or Link</h5>
          </div>

          <div className='mod_Field'>
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type='text'
              placeholder="Start your question with 'What', 'How', 'Why', etc. "
            />
            <div className='mod_Link'>
              <input
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                type='text'
                placeholder='Inclue a link Here'
              ></input>
            </div>
          </div>
          <div className='mod_buttons'>
            <button className='cancle' onClick={() => setIsModalOpen(false)}>
              Cancel
            </button>
            <button type='sumbit' onClick={handleQuestion} className='add'>
              Add Question
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
}
