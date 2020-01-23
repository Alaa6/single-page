import React from "react";
import 'react-animated-slider/build/horizontal.css';
import Slider from 'react-animated-slider';
import pic1 from '../../assets/images/pic1.png'
import pic2 from '../../assets/images/pic2.png'
import pic3 from '../../assets/images/pic3.png'



  const slides = [
    { title: 'First item', image: pic1 },
    { title: 'First item', image: pic2 },
    { title: 'First item', image: pic3 },
   
  ];


class ImageSlider extends React.Component {



    constructor() {
        super();
        this.state = {
           
        
        };
    }

    

    render() {
     
        return (
         <Slider 
         autoplay={1} 
         duration={4000} >
            {slides.map((slide, index) => 
            <div key={index}>
              <img src={slide.image}  />
            </div>)}
          </Slider>
        );
    }
}


export default ImageSlider;

