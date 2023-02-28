import { useState } from 'react'

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt

function generatePassword(setPassword, setName) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let password = '';
  //write a function that generates a string of 8 random characters.
  for (let i = 0; i < 8; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  //Your random password should display in the component when you press the "Generate" button. This will happen automatically by calling:
  setPassword(password);
  setName('');
}

function Password() {
  const [password, setPassword] = useState('');
  const [name, setName] = useState(' ');

  return (
    <div>
      <input 
      type="text"
      onChange={(e) => setPassword(e.target.value)}
      value={password}
      />
      <input
      type="text"
      onChange={(e) => setName(e.target.value)}
      value={name}
      />
      <div>
        <button onClick={(e) => {
          generatePassword(setPassword, setName)
          }}>Generate</button>
      </div>
    </div>
  );
}

export default Password;
