import { useState } from 'react'

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt

function generatePassword(setPassword) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let password = '';
  //write a function that generates a string of 8 random characters.
  for (let i = 0; i < 8; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  //Your random password should display in the component when you press the "Generate" button. This will happen automatically by calling:
  setPassword(password);
}

function Password() {
  const [password, setPassword] = useState('');

  return (
    <div>
      <input 
      type="text"
      onChange={(e) => setPassword(e.target.value)}
      value={password}
      />
      <div>
        <button onClick={(e) => {
          generatePassword(setPassword)
          }}>Generate</button>
      </div>
    </div>
  );
}

export default Password;
