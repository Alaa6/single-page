import React from "react";
import ImageSlider from '../../components/ImageSlider/ImageSlider'
import logo from '../../assets/images/logo.png';
import './home.scss'
import productCard from '../../components/ProductCard/productCard'

import product1 from '../../assets/images/product1.png'
import product2 from '../../assets/images/product2.png'
import product3 from '../../assets/images/product3.png'
import product4 from '../../assets/images/product4.png'
import product5 from '../../assets/images/product5.png'
import product6 from '../../assets/images/product6.png'
import product7 from '../../assets/images/product7.png'
import product8 from '../../assets/images/product8.png'
import product9 from '../../assets/images/product9.png'
import product10 from '../../assets/images/product10.png'


const Products = [
    {img : product1 , name :'بيبسي',price:'16',disPrice:'13' },
    {img : product2 , name :'سي فود',price:'60',disPrice:'40' },
    {img : product3 , name :'فليه',price:'70',disPrice:'50' },
    {img : product4 , name :'بيبسي' ,price:'10',disPrice:'7' },
    {img : product5 , name :'طحينة' ,price:'15',disPrice:'12'},
    {img : product6 , name :'حلويات شرقية',price:'10',disPrice:'7.5' },
    {img : product7 , name :'وافل'  ,price:'40',disPrice:'30' },
    {img : product8 , name :'غريبة' ,price:'30',disPrice:'25'},
    {img : product9 , name :'رنجة' ,price:'30',disPrice:'25' },
    {img : product10 , name :'بيبسي'  ,price:'16',disPrice:'13'},
     
   ];

class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            StateResult: []

        };
    }



    render() {



        return (
            <div>
                <ImageSlider />

                <section className="container">
                    <div className="container__list">
                    {Products.map((src, index) => {
                      
                      return <React.Fragment key={index}>

                          {productCard({

                              index: index,
                              imgSrc: src.img,
                              productName: src.name,
                              price: '300',
                              buttomText: 'تفاصيل ',
                              onClick: null,
                              price: src.price,
                              disPrice: src.disPrice
                          })}

                      </React.Fragment>

                  })}

                    </div>

                  
                </section>




            </div>
        );
    }
}

export default Home;