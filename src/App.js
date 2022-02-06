import { useState, useEffect } from "react";
import FlipMove from "react-flip-move";
import { FormControl, IconButton } from "@material-ui/core";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import Message from "./parts/Message";
import "./App.css";
import database from "./firebase";
import firebase from "firebase/app";
import "firebase/firestore";
import SendIcon from '@mui/icons-material/Send';


function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const [username, setUsername] = useState("");

  //Run firebase db activity once the app is load
  useEffect(() => {
    database
      .collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        //Showing message
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("Please enter your name"));
  }, []);
  //Send message
  const sendMessage = (event) => {
    event.preventDefault();
    //Save Collection to firebase
    database.collection("messages").add({
      message: input,
      username: username,
      timestamp: new Date(),
    });

    setMessages([...messages, { username: username, text: input }]);
    setInput("");
  };
  return (
    <div className="App">
      <img className="logo" src="https://www.freepnglogos.com/uploads/facebook-messenger-png/file-facebook-messenger-logo-svg-wikipedia-9.png" />
      <h1>Facebook Messenger Clone</h1>
      <h3>Welcome {username}</h3>
      <form className="app__form">
        <FormControl className="app__formControl">
          <Input
            className="app__input"
            variant="filled"
            onChange={(event) => setInput(event.target.value)}
            placeholder="Input Message"
          />
          <IconButton className="app__IconButton" disabled={!input} type="submit" variant="contained" onClick={sendMessage} color="primary">
            <SendIcon variant="contained" />
          </IconButton>

        </FormControl>
      </form>
      {/* Loop for Showing Message */}
      <FlipMove>
        {messages.map((message, i) => (
          <Message key={i} username={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}
export default App;
