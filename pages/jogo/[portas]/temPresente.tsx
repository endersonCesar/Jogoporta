import Porta from "../../../componentes/Porta";
import { useEffect, useState } from "react";
import { atualizarPortas, criarPorta } from "../../../functions/portas";
import styles from '../../../styles/Jogo.module.css';
import Link  from 'next/link'
import {useRouter} from 'next/router'
export default function Jogo(){

    const [portas, setPortas] = useState([]);
    const [valido, setValido] = useState(false);
    const router = useRouter()

    useEffect(()=>{
      let min = Math.ceil(1);
      let max = Math.floor(+router.query.portas);
    
        const portas =  +router.query.portas
        const temPresente =   Math.floor(Math.random() * (max - min)) + min
        setPortas(criarPorta(portas,temPresente))
    },[router?.query])

    useEffect(()=>{
      
      let min = Math.ceil(1);
      let max = Math.floor(+router.query.portas);

      const portas =  +router.query.portas
      const temPresente =   Math.floor(Math.random() * (max - min)) + min

      const qtdePortasValidas = portas>=3 && portas<=100
      const temPresenteValido = temPresente>=1 && temPresente<=portas
      setValido(qtdePortasValidas && temPresenteValido)

    },[portas])


    
    function renderizarPorta() {
      return valido && portas.map(porta => {
        return (
          <Porta
            key={porta.numero}
            value={porta}
            onChange={novaPorta =>setPortas(atualizarPortas(portas,novaPorta))}
          ></Porta>
        );
      });
    }
    return (
        
        <div className={styles.jogo}>
            <div className={styles.portas}>
                     {valido?renderizarPorta():<h1>Valores inválidos</h1>}
            </div>
            <div className={styles.botoes}>
                    <Link href="/" passHref>
                        <button>Reiniciar</button>
                    </Link>
            </div>
         
        </div>
    );
}