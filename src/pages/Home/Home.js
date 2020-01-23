import React from "react";
import ImageSlider from '../../components/ImageSlider/ImageSlider'
import logo from '../../assets/images/logo.png';
import './home.scss'
import productCard from '../../components/ProductCard/productCard'
import CONFIG from '../../assets/config'

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

import MapScreen from '../../components/Map'
import Slider from 'react-animated-slider';
import pic1 from '../../assets/images/pic1.png'
import pic2 from '../../assets/images/pic2.png'
import pic3 from '../../assets/images/pic3.png'



const slides = [
    { title: 'First item', image: pic1 },
    { title: 'First item', image: pic2 },
    { title: 'First item', image: pic3 },

];




const Products = [
    { img: product1, name: 'بيبسي', price: '16', disPrice: '13' },
    { img: product2, name: 'سي فود', price: '60', disPrice: '40' },
    { img: product3, name: 'فليه', price: '70', disPrice: '50' },
    { img: product4, name: 'بيبسي', price: '10', disPrice: '7' },
    { img: product5, name: 'طحينة', price: '15', disPrice: '12' },
    { img: product6, name: 'حلويات شرقية', price: '10', disPrice: '7.5' },
    { img: product7, name: 'وافل', price: '40', disPrice: '30' },
    { img: product8, name: 'غريبة', price: '30', disPrice: '25' },
    { img: product9, name: 'رنجة', price: '30', disPrice: '25' },
    { img: product10, name: 'بيبسي', price: '16', disPrice: '13' },

];




const products = () => (


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
);



const Workers = (StateResult) => (


    <div className="container__list">
        {StateResult.map(function (item) {
            return (
                <div className='list-row ' style={{ paddingRight: 40 }} >
                    <div style={{ margin: 20 }}>

                        <img src={item.picture.large} alt="Logo" />
                        <h3 >{'name : ' + item.name.first} </h3>

                    </div>


                </div>


            )
        })}
    </div>
);

class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            StateResult: []

        };
    }


    componentDidMount() {
        var that = this;
        var url = CONFIG.api;
        console.log("-----------url:" + url);

        fetch(url, { method: 'Get' })
            .then((response) => response.json()) //then


            .then(function (result) { //then
                that.setState({ StateResult: [...that.state.StateResult, ...result.results] })
                console.log(result.results);

            })
            .catch(function (error) {  //catch
                console.log("-------- error ------- " + error);
                alert('result :' + error);
            });


    }



    render() {
        const { StateResult } = this.state

        return (
            <div className="home">
                <Slider
                    autoplay={1}
                    duration={4000} >
                    {slides.map((slide, index) =>
                        <div key={index}>
                            <img src={slide.image} />
                        </div>)}
                </Slider>

                <section className="container">
                    <h3 style={{ color: '#7ac142', textAlign: 'end', marginRight: 50, paddingRight: 20 }}> المنتجات </h3>

                    {products()}
                </section>
                <section className="container">
                    <h3 style={{ color: '#7ac142', textAlign: 'end', marginRight: 50, paddingRight: 20 }}>طاقم العمل </h3>

                    {Workers(StateResult)}
                </section>

                <section className="map" style={{ width: '990px', height: '536px', marginLeft: 140, marginRight: 100 }}>
                    {/* <h3 style={{ color: '#7ac142', textAlign: 'end', marginRight: 50, paddingRight: 20 }}> فروعنا </h3> */}

                    {/* <MapScreen /> */}
                </section>




            </div>
        );
    }
}

export default Home;