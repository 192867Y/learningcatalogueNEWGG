import React, { useState, useEffect } from 'react';
import './App.css';
import './style/customStyle.css';
import SearchBar from './components/NavBar/searchBar';
import CatalogueItems from './components/NavBar/catalogueItems';
import Header from './components/FixedNavBar/header';
import Test from './components/NavBar/test';
import LearningPathway from './components/LearningPathway/learningPathway';
import LearningPathway2 from './components/LearningPathway/learningPathway2';
import PathwayDetails from './components/LearningPathway/pathwayDetails';
import CourseDetails from './components/courseDetails';
import Cart from './components/cart';
import data from './data';
import ProductContext from './contexts/ProductContext';
import CardContext from './contexts/CartContext';

import ProductsNEW from './components/ProductNew';




import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const initialCart = () =>
  JSON.parse(window.localStorage.getItem('cart')) || [];

  const [products] = useState(data);
  const [cart, setCart] = useState(initialCart);

  useEffect(() => {
    window.localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addItem = item => {
    if (!cart.find(cartItem => cartItem.id === item.id)) {
      setCart([...cart, item]);
    }
  };

  const removeItem = id => {
    setCart(cart.filter(item => item.id !== id));
  };

  const clearItem = (cart) => {
    window.localStorage.clear(cart)
    window.location.reload(true);
  }
    
  const editItem = (item) => {

    let existingItem = cart.find(cartItem => cartItem.id == item.id);

    if (existingItem) {
      
      existingItem.isChecked = true
      setCart([...cart, item]);
      
      window.localStorage.setItem('isChecked', 'true');
    } 

    };
  


  return (
    <div >

      <Router>
        

        <ProductContext.Provider value={{ products, addItem }}>
          <CardContext.Provider value={{ cart, removeItem, clearItem, editItem }}>
            <div className="App">
            <Header />
             
            <Route exact path="/" component={LearningPathway} />
            <Route path='/learningpathway2' component={LearningPathway2} />
            <Route path='/courseDetail' component={CourseDetails} />
            <Route path='/cart' component={Cart} />
            
            <Route path="/products/:id" component={ProductsNEW} />
            

            </div>
          </CardContext.Provider>
        </ProductContext.Provider>
        

   

        {/* Keep the codes if there are links to include in navigation bar */}
        {/*  <Route path="/catalogueItems" component={() => <CatalogueItems catid="1" />} /> */}
        {/*  <Route path="/catalogueItems" render={(props) => (<CatalogueItems {...props} catid="1" />)} /> */}
        {/*  <Route path='/learningpathway' component={Learningpathway} /> */}
      </Router>
      
      
      
      
    </div> 
    
  );
}



export default App;
