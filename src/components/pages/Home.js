
import Background from './layout/Img/background.jpg'
import styles from './layout/Styles.module.css' 

function Home() {
  return (
    <section className={styles.conteudo}>

      <img className={styles.imgBackground} src={Background} alt="logo"/>
  
    </section>
  )
}

export default Home