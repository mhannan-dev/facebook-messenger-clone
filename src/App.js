import { FormControl} from '@material-ui/core';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import { useState } from 'react';
import  Message  from './parts/Message'
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(['hi', 'hello', 'welcome']);
  console.log(input);
  console.log(messages);
  //Send message
  const sendMessage = (event) => {
    setMessages([...messages, input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>React, Firebase Facebook Messenger</h1>
      <form>
        <FormControl>
          <InputLabel>Enter a message below</InputLabel>
          <Input placeholder='Enter message here' onChange={event => setInput(event.target.value)} />
          <Button  disabled={!input} type="submit" variant="contained" onClick={sendMessage}>Send Message</Button>
        </FormControl>
      </form>
      {/* Showing Message */}
      {
        messages.map(message => (
          <Message key={message.toString()} text={message}/>
        ))
      }

    </div>
  );
}
export default App;
