import { useSelector } from 'react-redux'

function PasswordsList() {
  const passwords = useSelector(state => state.passwords.value)

  return (
    <ul>
      {passwords.map(password => (
        <li>{password}</li>
      ))}
    </ul>
  )
}

export default PasswordsList