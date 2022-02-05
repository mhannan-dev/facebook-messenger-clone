import { useState, useEffect } from 'react';
import { FormControl } from '@material-ui/core';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Message from './parts/Message'
import './App.css';
import database from './firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { username: 'Sonny:', message: 'hi guys' },
    { username: 'Kazi:', message: 'whats up' }
  ]);

  const [username, setUsername] = useState('');

  //Run firebase db activity once the app is load
  useEffect(() => {
    database.collection('messages').onSnapshot(snapshot => {
      //Showing message
      setMessages(snapshot.docs.map(doc => doc.data()))
    });
  }, []);


  useEffect(() => {
    setUsername(prompt('Pleae enter your name'));
  }, [])
  //Send message
  const sendMessage = (event) => {
    event.preventDefault();
    //Save Collection to firebase
    database.collection('messages').add({
      message: input,
      username: username,
      timestamp: new Date()
    });
    
    setMessages([
      ...messages, { username: username, text: input }
    ]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>React, Firebase Facebook Messenger</h1>
      <h3>Welcome {username}</h3>
      <form>
        <FormControl>
          
          <Input variant="filled" onChange={event => setInput(event.target.value)} defaultValue="Hello world"/>
          <Button disabled={!input} type="submit" variant="contained" onClick={sendMessage}>Send Message</Button>
        </FormControl>
      </form>
      {/* Loop for Showing Message */}
      {messages.map((message, i) => (
        <Message key={i} username={username} message={message} />
      ))}
    </div>
  );
}
export default App;
