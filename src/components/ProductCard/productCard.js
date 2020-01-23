import React from 'react';
import './product.scss';
import { Link } from "react-router-dom";



function Product( props) {
  

 
  return (

       <div className='card' >
        <img src ={props.imgSrc} className='imgProduct' ></img>
        <h3>{props.productName}</h3>
        <p>{props.price}</p>
       <button  className="button primary" onClick={props.onClick} >
          <Link key={props.index} to={{pathname :'./details/'+props.index+'/'+props.productName +'/'+props.price+'/'+props.disPrice+props.imgSrc}} style={{ textDecoration: 'none', color: '#fff' }} >{props.buttomText}</Link>
       </button>
    
    </div>


   
  );
}

export default Product;
