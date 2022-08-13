//AQUI É RESPONSÁVEL POR VALIDAR O LOGIN CHAMANDO A API EXTERNA 
import '../../index.css'
import styles from './layout/Styles.module.css' 
import { useState } from 'react'
import axios from 'axios'



function Login() {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 
  const handleUsername = (e) => {
    setUsername(e.target.value) 
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  //OPTEI POR CONSUMIR A API EM AXIOS 
  const handleValida = ()  => {
    console.log({username, password})

    axios.post('https://dummyjson.com/auth/login', {
      username : username,
      password : password

    })
     .then(result => console.log(result) )     
      .catch(result => alert('Usuário ou senha inválidas'))
    
  }

 
  return (
    <div className={styles.login}>
      <label>Usuário</label>
      
      <input value={username} placeholder={'Usuário'} type="text" onChange={handleUsername} />

      <label>Senha</label>
      
      <input value={password} placeholder={'Senha'} type="password" onChange={handlePassword} /> 

      <button onClick={handleValida}>Login</button>
      
    </div>


  )

}

export default Login