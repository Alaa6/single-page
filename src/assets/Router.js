import React from 'react';
import { Router, Route, Switch } from "react-router";

// import About from '../Pages/About'
// import Products from '../Pages/Products/ProductList'
// import ContactUs from '../Pages/ContactUs'
// import Branches from '../Pages/Branches'
import Header from '../components/header'
import history from '../utils/History'
import Home from '../pages/Home/Home'; 
import ProductDetails from '../pages/Home/productDetails'
import Footer from '../components/Footer/footer'


class MyRouter extends React.Component {
    constructor() {
        super();

    };

    render() {
        return (
            <div>
                <Router history={history}>
                    <div>
                    <Header/>
                    <Switch>
                    <Route exact path="/"        component={Home}/>
                        {/* <Route path="/about"     component={About} />
                        <Route path="/products"  component={Products} />
                        <Route path="/contactUs" component={ContactUs} />
                        <Route path="/branches"  component={Branches} />*/}
                        <Route path="/details/:id/:name/:price/:disPrice/:img/:media/:imgSrc"  render={ (routeProps)=> <ProductDetails {...routeProps}/> }/> 
                    </Switch>
                    <Footer/>
                       
                    </div>
                       
                </Router>
            </div>

        );
    }
}
export default MyRouter;