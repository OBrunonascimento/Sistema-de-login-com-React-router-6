import { Link } from 'react-router-dom'
import styles from './layout/Navbar.module.css'
import logo from './layout/Img/logo.png'


function Navbar() {
  return (
    <nav className={styles.navbar}>
      <img className={styles.logo} src={logo} alt="logo"/>
      
      <ul className={styles.list}>

        <li className={styles.item}><Link to="/">Home</Link> </li>
        <li className={styles.item}><Link to="/produtos">Produtos</Link> </li>
        <li className={styles.item}><Link to="/institucional">Institucional</Link></li>
        <li className={styles.item4}><Link to="/login">Login</Link></li>

      </ul>
    </nav>


  )
}

export default Navbar