import { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './layout/Styles.module.css'
import { Navigate } from 'react-router-dom'


function Api() { 

  const [produtos, setProdutos] = useState([])

  //ALTERANDO PARA 'false' A PÁGINA DE PRODUTOS SE TORNA PRIVADA 
  const [toLogin , setToLogin] = useState(true) 

  useEffect(() => {
    axios.get('https://dummyjson.com/products/')
      
      .then((response) => { 
        console.log(response)
        setProdutos(response.data.products)
      }).catch(() => {
        
      } )
 
  }, []) 

  //AQUI É REALIZADO A AUTENTICAÇÃO DO TOKEN RETORNADO PELA API
    useEffect(() => {
      const token = localStorage.getItem('appToken');

      if(token) {
        setToLogin(true);
      }
    },[]); if (!toLogin) {
      return <Navigate to='/Login' />
    }


    
  return (

    <div>
      
      <h1>Nossos Produtos</h1>

      <div>

        {produtos.map((post, key) => { 
          return (

          <div key={key}>
            <div className={styles.container}>
                <h1>{post.title}</h1>
                <div className="style.linha"></div>
                <p>{post.description}</p>
            </div>
          </div>)
        }
        )}

      </div>
    </div>

  )

}

export default Api