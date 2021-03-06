import React, { Component } from 'react';
import Products from './section/Products';
import Details from './section/Details';
import {Route} from "react-router-dom";
import Cart from './section/Cart';
import Payment from './section/Payment';
import Login from './Login';
import Signup from './Signup';



export class Section extends Component {
    render() {
        return (
            <section>
                    <Route path="/" component={Products} exact />
                    <Route path="/product" component={Products} exact  />
                    <Route path="/product/:id" component={Details} exact />
                    <Route path="/cart" component={Cart}  exact/>
                    <Route path="/payment" component={Payment} exact />
                    <Route path="/login" component={Login} exact />
                    <Route path="/signup" component={Signup} exact />
            </section>
        )
    }
}

export default Section
