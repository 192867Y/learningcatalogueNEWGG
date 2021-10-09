import React, { useState, useContext } from "react";
import styled from 'styled-components';
import { Button } from 'antd';
import ProductContext from '../contexts/ProductContext';
import CartContext from '../contexts/CartContext';
import { BackTop } from 'antd';
import {
    BrowserRouter as Router,
    generatePath,
    Switch,
    Route,
    useHistory,
    useParams
  } from "react-router-dom";


  const style = {

    backgroundColor: "#D9E3F0"

  };

const style2 = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 4,
    backgroundColor: '#597ef7',
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
  };

const ButtonContainer = styled.div`
  .ant-btn-primary {
    background-color: #597ef7;
    align-items: "center";
    justify-content: "center";
  }
`;



const Productnew = props => {
  
  const [isAdded, setIsAdded] = useState(false);
  const { cart } = useContext(CartContext);

  const buttonGG = (item) => {

    let existingItem = cart.find(cartItem => cartItem.id == item.id);

    if (existingItem) {
      return (
        <ButtonContainer>
        <Button
          type="primary"
          size="large"
        > ✔ ADDED
        </Button>
        </ButtonContainer>)
    } else { 
      return (
        <ButtonContainer>
        <Button
          type="primary"
          size="large"
          onClick={() => props.addItem(props.product)}
        > ADD TO CART
        </Button>
        </ButtonContainer>);  
    }

    };

  
  return (
    <div className="container">

      <div className="App">
          <hr style={style} />
          <h5 className="title" style={style}> {props.product.title} </h5>
          <hr style={style} />
      </div>

      <p> 
      <b> Course Code: </b> {props.product.courseCode} <br /><br />
      <b> Clinical/Non-Clinical: </b> {props.product.clinicalType} <br /><br />
      <b> Course Overview: </b> {props.product.courseOverview} <br /><br />
      <b> Pre-requisite: </b> {props.product.preRequisite} <br /><br />
      <b> Target Audience: </b> {props.product.audience} <br /><br />
      <b> Modality: </b> {props.product.modality} <br /><br />
      <b> Duration: </b> {props.product.duration} <br /><br />
      <b> Course Fee: </b> ${props.product.price} <br /><br />
      </p>


      {buttonGG(props.product) }

      <BackTop>
          <div style = { style2 }>UP</div>
      </BackTop>

    </div>

    
  );
};






const ProductsNEW = () => {
    const { id } = useParams();
    const { products, addItem } = useContext(ProductContext);
  
    console.log(id);

    const idList = [];
    const Newid = id - 1
    idList.push(products[Newid])
    
    
    return (
      <div>
        {idList.map(product => (
        <Productnew key={product.id} product={product} addItem={addItem} />
      ))}
      </div>
    );
  };

export default ProductsNEW;