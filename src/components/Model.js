import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import ButtonContainer from './style/ButtonContainer';
import ModelContainer from './style/ModelContainer';
import {Link} from 'react-router-dom';


 class Model extends Component {
    render() {
        return (
        <ProductConsumer>
            {(value) => {
                const { modalOpen , closeModal}= value;
                const {img, title, price} = value. modalProdact;
                 
                if (!modalOpen) {
                    return null;
                }else{
                  return(<ModelContainer>
                        <div className="container">
                            <div className="row">
                                <div id="model" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                    <h5> item added </h5>
                                    <img src={img} className="img-fluid" alt="product"/>
                  <h5>{title}</h5>
                  <h5 className="text-muted">price: $ {price}</h5>
                  <Link to="/">
                      <ButtonContainer onClick={() => closeModal()}>
                          store
                      </ButtonContainer>
                  </Link>
                    <Link to="/cart">
                      <ButtonContainer cart onClick={() => closeModal()}>
                          go to cart 
                      </ButtonContainer>
                  </Link>
                                </div>
                            </div>
                        </div>
                    </ModelContainer>)
                }

            }}
        </ProductConsumer>
        )
    }
}

export default Model
