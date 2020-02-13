import React ,{Component , Fragment} from 'react';
import './App.css';
import {Switch , Route} from 'react-router-dom';
import Narbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/cart/Cart';
import Default from './components/Default';
import Model from './components/Model';

class App extends Component {
  render(){
    return(
    <Fragment>
      <Narbar/>
      <Switch>
           <Route exact  path="/" component={ProductList} />
        <Route  path="/details" component={Details} />
        <Route path='/cart' component={Cart}/>
     
        <Route component={Default}/>
      </Switch>

<Model/>    
    </Fragment>
    )   

  }
}



export default App ;
