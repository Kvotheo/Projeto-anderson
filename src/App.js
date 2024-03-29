import React, { useState } from 'react';
import img from "./assets/icone.svg.svg";
import "./styles.css";

function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
//iuDASDSADDAS
  
  return (
    <div className='container'>
      <div className='container-login'>
        <div className='wrap-login'>
          <form className='login-form'>
            <span className='login-form-title'>WELCOME!</span>
            <span className='login-form-title'>
              <img src={img} alt= "Programador Front End" />
            </span>

            <div className="wrap-input">
              <input 
              className={email !== "" ? 'has-val input' : 'input'}
              type="email" 
              value={email}
              onChange={e => setEmail(e.target.value)}
              />
              <span className= "focus-input" data-placeholder="Email"></span>
            </div>
//oi
            <div className="wrap-input">
              <input 
              className={password !== "" ? 'has-val input' : 'input'}
              type="password" 
              value={password}
              onChange={e => setPassword(e.target.value)}
              />
              <span className= "focus-input" data-placeholder="Password"></span>
            </div>

            <div className= "container-login-form=btn">
              <button className="login-form-btn">Login</button> 
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default App;
