import { FormControl } from '@material-ui/core';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import Message from './parts/Message'
import './App.css';


function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { username: 'Sunny' }, { text: 'whatsapp' },
    { username: 'Ahmed' }, { text: 'hello bro' }
  ]);

  const [username, setUsername] = useState('');
  console.log(input);
  console.log(messages);

  useEffect(() => {
    setUsername(prompt('Pleae enter your name'));
  }, []);
  //Send message
  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>React, Firebase Facebook Messenger</h1>
      <h3>Welcome {username}</h3>
      <form>
        <FormControl>
          <InputLabel>Enter a message below</InputLabel>
          <Input placeholder='Enter message here' onChange={event => setInput(event.target.value)} />
          <Button disabled={!input} type="submit" variant="contained" onClick={sendMessage}>Send Message</Button>
        </FormControl>
      </form>
      {/* Showing Message */}
      {
        messages.map(message => (
          <Message key={message.toString()} username={message.username} text={message.text} />
        ))
      }

    </div>
  );
}
export default App;
