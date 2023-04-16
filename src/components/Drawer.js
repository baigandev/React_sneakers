import React from 'react';
import {AiOutlineArrowRight} from "react-icons/ai";
import {BsPlusSquare} from "react-icons/bs";
const Drawer = () => {
    return (
       
      <div style={{  display: "none" }} className='overlay'>
        <div className='drawer d-flex flex-column'>
            <h2 className='mb-30 d-flex justify-between'>Корзина  <a className='removeBtn cu'><BsPlusSquare/></a></h2>

            <div className='item flex'>
            <div className='cartItem d-flex align-center mb-20'>
              <div className='cartItemImg' style={{
                 backgroundImage: "url('/img/sneakers.webp')"
              }}>

              </div>
        
            <div className='mr-20 flex'>
              <p className='mb-5'>Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>12 999 руб.</b>
            </div>
            <a className='removeBtn'><BsPlusSquare/></a>
            </div>

            <div className='cartItem d-flex align-center'>
              <div className='cartItemImg' style={{
                 backgroundImage: "url('/img/sneakers.webp')"
              }}>

              </div>
        
            <div className='mr-20 flex'>
              <p className='mb-5'>Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>12 999 руб.</b>
            </div>
            <a className='removeBtn'><BsPlusSquare/></a>
            </div>
             

            </div>

<div className='cartTotalBlock'>
         <ul >
              <li>
                 <span>Итого:</span>
                 <div></div>
                 <b>21 498 руб.</b>
              </li>
              <li>
                 <span>Налог 5%:</span>
                 <div></div>
                 <b>1074 руб.</b>
              </li>
             </ul>
             <button className='greenButton '>Оформить заказ <AiOutlineArrowRight className='icon'/></button>
</div>
        </div>
     </div>

    );
};

export default Drawer;