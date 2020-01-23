import React from 'react';
import {  Link} from "react-router-dom";


class Footer extends React.Component {
 

    render() {

    return (
        <div>


            <div className='footer' >

                <div className='row'> 
               <div  style={{marginLeft :100}}>
                    <p className='about-comp-word' style={{ marginTop: 80, fontSize: 20  }}>  عن الشركة</p>
                    <p className='about-comp-word' style={{ fontSize: 16, }} >
                        <Link to="/about" style={{ textDecoration: 'none', color: '#868686' }} >عن الشركة </Link></p>
                    <p className='about-comp-word' style={{fontSize: 16 }}>
                         <Link to="/branches" style={{ textDecoration: 'none', color: '#868686' }}  >الفروع </Link> </p>
                </div>
              <div  style={{marginRight :100}}>
                <p className='about-comp-word' style={{ marginTop: 80, fontSize: 20 }}> اتصل بنا </p>
                <p className='about-comp-word' style={{ fontSize: 16, color: '#868686'}}>27560995</p>
                <p className='about-comp-word' style={{  fontSize: 16 ,color: '#868686'}}>alaa.ashraf775@gmail.com</p>
            </div>
                </div>

                
              


            </div>


    


        </div>
       

    );
    }
}
export default Footer;