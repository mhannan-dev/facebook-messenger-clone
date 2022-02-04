import { Button, FormControl, InputLabel} from '@material-ui/core';
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
          <InputLabel>Enter a message</InputLabel>
          <input placeholder='Enter text' onChange={event => setInput(event.target.value)} />
          <Button type="submit" variant="contained" onClick={sendMessage}>Send Message</Button>
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
