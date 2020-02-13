import React, { Component , Fragment} from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmplyCart from './EmptyCart';
import CartList from './CartList';
import CartTotals from './CartTotals';
import {ProductConsumer} from '../../context';

 class Cart extends Component {
    render() {
        return (

        <section>
            <ProductConsumer>
                { value => {
                    const {cart} = value; 
                    if(cart.length >0 ){
                        return(
            <Fragment>
              <Title name="your" title="cart"/>
              <CartColumns/>
              <CartList value={value}/>
              <CartTotals value={value}/>
            </Fragment>
                        )
                    }else{
                       return <EmplyCart/> 
                    }
                }}
            </ProductConsumer>
        </section>
        )
    }
}

export default Cart
