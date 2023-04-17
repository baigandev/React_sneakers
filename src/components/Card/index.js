import {VscHeartFilled} from "react-icons/vsc";
import {BsPlusLg} from "react-icons/bs";
import styles from "./Card.module.scss"
function Card(props){
    return (
<div className={styles.card}>
   <div className={styles.like} style={{
      background: "pink",
      width: "25px",
      height: "25px",
      borderRadius: "6px",
      color: "white"
   
   }}>
      <VscHeartFilled />
   </div>
          <img width={183} height={162} src={props.imgUrl} alt='sneackers'/>
          <h5>{props.title}</h5>
          <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column'>
               <span>Цена:</span>
               <b>{props.price}</b>
            </div>
            <a className='button d-flex justify-center align-center'>
               <BsPlusLg/>
            </a>
          </div>
      </div>
    );
}

export default Card;