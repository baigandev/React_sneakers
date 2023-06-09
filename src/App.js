import './index.scss';
import {BsSearch} from "react-icons/bs";

import "macro-css"
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
const arr = [
   {name:"Мужские Кроссовки Nike Blazer Mid Suede", price: "12 999", imgUrl: "/img/sneakers.webp"},
   {name:"Мужские Кроссовки Nike Air Max 270", price: "15 600", imgUrl: "/img/sneakers1.webp"},
   {name:"Мужские Кроссовки Nike Blazer Mid Suede", price: "8499", imgUrl: "/img/sneakers2.webp"},
   {name:"Кроссовки Puma X Aka Boku Future Rider", price: "8999", imgUrl: "/img/sneakers3.webp"}
]
function App(){
   return (
    <div className='wrapper clear'>
  <Drawer/>
   <Header/>
      
      <div className="content p-40">
   
   <div className='d-flex align-center justify-between mb-40'>
   <h1>Все кроссовки</h1>
   <div className='search-block'>
     <BsSearch/>
     <input placeholder='Поиск.....'/>
   </div>
   </div>
           
           
<div className='d-flex'>
{
  arr.map((obj) => (
   <Card title={obj.name} price={obj.price} imgUrl={obj.imgUrl}/>
  ))
}
 
 
</div>
      
      </div>
      </div>
   )
}

export default App;
