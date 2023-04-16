import {VscHeartFilled} from "react-icons/vsc";
import {BsPlusLg} from "react-icons/bs";
function Card(){
    return (
<div className='card'>
   <div className='d-flex align-center justify-center like' style={{
      background: "pink",
      width: "25px",
      height: "25px",
      borderRadius: "6px",
      color: "white"
   
   }}>
      <VscHeartFilled />
   </div>
          <img width={183} height={162} src='/img/sneakers.webp' alt='sneackers'/>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column'>
               <span>Цена:</span>
               <b>12 999 руб.</b>
            </div>
            <a className='button d-flex justify-center align-center'>
               <BsPlusLg/>
            </a>
          </div>
      </div>
    );
}

export default Card;