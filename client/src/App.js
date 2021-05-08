import './App.css';
import { useState } from "react";

function App() {

const [password, setPassword] = useState("");
const [title, setTitle] = useState("");


  return ( 
    <div className="App">
      <div className="AddingPassword">
        <input type="password" placeholder="Ex. password123" 
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        <input type="password" placeholder="Ex. Facebook"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />

        <button>Add Password</button>
      </div>
    </div>
  );
}

export default App;
