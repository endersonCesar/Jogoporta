import Porta from "../../../componentes/Porta";
import { useEffect, useState } from "react";
import { atualizarPortas, criarPorta } from "../../../functions/portas";
import styles from '../../../styles/Jogo.module.css';
import Link  from 'next/link'
import {useRouter} from 'next/router'
export default function Jogo(){

    const [portas, setPortas] = useState([]);
    const router = useRouter()

    useEffect(()=>{
        const portas =  +router.query.portas
        const temPresente =   +router.query.temPresente
        setPortas(criarPorta(portas,temPresente))
    },[router?.query])

    
    function renderizarPorta() {
      return portas.map(porta => {
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
                     {renderizarPorta()}
            </div>
            <div className={styles.botoes}>
                    <Link href="/">
                        <button>Reiniciar</button>
                    </Link>
            </div>
         
        </div>
    );
}