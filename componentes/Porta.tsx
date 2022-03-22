import styles from "../styles/Porta.module.css";
import PortaModel from '../model/porta'
import Presente from '../componentes/Presente'
interface PortaProps{
    value:PortaModel
    onChange:(novaPorta:PortaModel)=>void
}


export default function Porta(props:PortaProps) {
  const porta = props.value
  
const aleternarSelecao  = e => props.onChange(porta.aleternarSelecao())
const abrir  = e =>{
  e.stopPropagation()
  props.onChange(porta.abrir())
} 
function renderizarPorta(){
  return(
   
    <div className={styles.porta}>
      <div className={styles.numero}>{porta.numero}</div>
      <div className={styles.macanata} onClick={abrir}></div>
    </div>

  )
}


  const seleciona = porta.selecionada && !porta.aberta ? styles.selecionada : "";
  return (
    <div className={styles.area} onClick={aleternarSelecao}>
       <div className={`${styles.estrutura} ${seleciona}`}>

       {porta.fechada? renderizarPorta(): 
        porta.temPresente?<Presente></Presente>:false}
       </div>
  

      <div className={styles.chao}></div>
    </div>
  );
}
