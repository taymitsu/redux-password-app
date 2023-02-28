import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPassword } from '../../features/passwords/passwordsSlice'
import './password.css'

function Password() {
  const dispatch = useDispatch()
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const styles = {
    button: {
      width: '15%',
      margin:'0.5em 0',
      padding: '0.5em',
      border: '4px solid #4687D3',
      borderRadius: '6px',
      background: '#4A90E2',
      color: '#fff'
    }
  }

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
        <button className="gen-button" 
        onClick={() => generatePassword()}>Generate</button>
      </div>
      <button 
      style={styles.button}
      onClick={() => dispatch(addPassword({ password, name }))}>Save</button>
    </div>
  );
}


export default Password;
