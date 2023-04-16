import React from 'react';
import {BiUserCircle} from "react-icons/bi";
import {BsCartPlus} from "react-icons/bs";
const Header = () => {
    return (
        <header className='d-flex justify-between align-center p-40'>
     <div className="d-flex align-center">
     <img src='/img/logo.jpg' width={80} height={80}/>
         <div>
            <h3 className='text-uppercase'> React Sneakers </h3>
            <p className='opacity-5'>Магазин лучших кросовок </p>
         </div>
     </div>
         <ul className='d-flex'>
            <li className='mr-30'>
               <BsCartPlus/>
               <span>1205 руб.</span>
            </li>
            <li>
               <BiUserCircle/>
            </li>
         </ul>
      </header>
    );
};

export default Header;