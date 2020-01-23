import React, { Component } from "react";
import { Link } from "react-router-dom";
import './navbar.scss'




class Navbar extends React.Component {
  render() {
    return (
     
    
        <div>

          <ul id="nav" >
            <li> <Link to="/"> الرئيسية </Link>        </li>
            <li> <Link to="#"> عن الشركة</Link>   </li>
            <li> <Link to="#"> المنتجات</Link> </li>
            <li> <Link to="#"> الفروع</Link>   </li>
            <li id="lastItem"><Link to="#"> اتصل بنا </Link></li>
          </ul>
        </div>

     


    );
  }
}

export default Navbar;

