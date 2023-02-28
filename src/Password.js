import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPassword } from './features/passwords/passwordsSlice'

function Password() {
  const dispatch = useDispatch()
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  function generatePassword() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';
    for (let i = 0; i < 8; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setPassword(password);
    setName('');
  }

  return (
    <div className="form">
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
        <button onClick={() => generatePassword()}>Generate</button>
      </div>
      <button onClick={() => dispatch(addPassword({ password, name }))}>Save</button>
    </div>
  );
}

export default Password;
