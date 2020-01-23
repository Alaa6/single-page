import React from 'react';
import logo from '../assets/images/logo.png'; 
import imgHeader from '../assets/images/headerPic.png'
import Navbar from './Navbar/navbar'


console.log(logo); 

function Header() {
  // Import result is the URL of your image
  return (
      <div >
          
           <img src={imgHeader} alt="Logo"  />
           <img src={logo} alt="Logo" className="Logo-a" />

           <Navbar/>

      </div>
   
  );
}
export default Header;