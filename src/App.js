import React, { useState } from 'react';
import { ImEye, ImEyeBlocked } from "react-icons/im";
import logo from './assets/bmw-logo.png'
import './styles.css'

function App() {

  const [showResults, setShowResults] = React.useState(false);
  const togglePasswordVisiblity = () => {
    setShowResults(showResults ? false : true)
    
  };

  return (
    <div className="container">
      <img src={logo}/>
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">            
            
            
            <div className="wrap-input">
              <p><strong>Login:</strong></p>
              <input type="e-mail" /> 
            </div>
            <div className="wrap-input">            
              <p><strong>Senha:</strong></p>
            <input type={showResults ? "text" : "password"} maxlength="38"/>  
               <div className="olho-icon">
               {showResults ? <ImEyeBlocked onClick={togglePasswordVisiblity}/> : <ImEye onClick={togglePasswordVisiblity}/>}
                </div>             
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn"><strong>Entrar</strong></button>
            </div>

            <div className="text-center"></div>
            
          </form>
        </div>
              <span className="txt1">Esqueci minha senha</span>
      </div>
    </div>
  );
}

export default App;
