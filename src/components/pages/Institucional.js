import Desenvolvedor from './layout/Img/desenvolvedor.jpg'
import styles from './layout/Styles.module.css'

function Institucional() {

    return (
        <><img src={Desenvolvedor} alt="logo" />
        
        <div className={styles.link}><a href="https://github.com/OBrunonascimento" target="_blank" rel="noopener noreferrer">Meu Github</a></div>
        </>
        )
        
  
    }
    

export default Institucional