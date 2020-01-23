
import React from 'react';
import './home.scss';


const ProductDetails = props =>(
  <div className="App" style={{ marginTop: 30, marginRight: 70 }}>
   {console.log(props)}

  <img src={'/'+props.match.params.img+ '/'+props.match.params.media+ '/'+props.match.params.imgSrc} style={{ width :300 ,height:300 }} className='detailsImg'/>
  <div className='row-product'>
  <p   style={{ fontSize: 25 ,color:'#434343'}}>{props.match.params.name } </p>
  <h4  style={{ fontSize: 25 ,color:'#434343'}}>{ " :  الاسم "} </h4>
  </div>

  <div className='row-product'>
  <p  style={{ fontSize: 25 ,color:'#f06264' ,textDecoration:'line-through'}}>{props.match.params.price } </p>
  <h4  style={{ fontSize: 25 ,color:'#434343'}}>{ " :  السعر قبل الخصم "} </h4>
  </div>

  <div className='row-product'>
  <p  style={{ fontSize: 25  ,color:'#5aa411'}}>{props.match.params.disPrice } </p>
  <h4  style={{ fontSize: 25 ,color:'#434343'}}>{ " :  السعر بعد الخصم "} </h4>
  </div>
 



</div>
);

{/*import React from 'react'

const Component1 = props => (
    <div>
    Component 1
    {console.log(props)}
    </div>
);

export default Component1;
*/}



  {/*class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      data : props
    
       
    };

      
  }



  render() {
      
    {console.log('hwa a da fe A              '+this.props.imgSrc);
    }
    
    return (

        <div className="App" style={{ marginTop: 30, marginRight: 70 }} >

        <img src={this.props.imgSrc} alt="Logo" />

        <ul className='scroll div' style={{ marginTop: 5 }}>
       <li style={{ fontSize: 16, textAlign: 'center' }}> {'alaa'}</li>
            <div className="list-row" >
              <li style={{ fontSize: 18, color: '#f06264 ', textAlign: 'center',textDecoration:'line-through' }}> {'300'}</li>
           
            </div>

            <div className="list-row" >
                <li style={{ fontSize: 18, color: ' #59b210', textAlign: 'center' }}> 250 </li>

            </div>


        </ul>


    </div>
    



    );
  }
}*/}

export default ProductDetails;