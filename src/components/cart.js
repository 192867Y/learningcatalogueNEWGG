import React, { useContext, useState } from 'react';
import { Button, message } from 'antd';
import { Card } from 'antd';
import 'antd/dist/antd.css';
import { Space } from 'antd';
import { emphasize, withStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Chip from "@material-ui/core/Chip";
import HomeIcon from "@material-ui/icons/Home";
import styled from 'styled-components';
import CartContext from '../contexts/CartContext';
import data from '../data';
import {
  CheckboxGroup,
  AllCheckerCheckbox,
  Checkbox
} from "@createnl/grouped-checkboxes";


const style1 = {
  flex:1,
  flexDirection:'row',
  alignItems: "left",
  justifyContent: "left",
}

const style = {

    backgroundColor: "#D9E3F0"

  };

const ButtonContainer = styled.div`
  .ant-btn-primary {
    background-color: #597ef7;
    align-items: "center";
    justify-content: "center";
  }
`;

const ButtonContainer2 = styled.div`
  .ant-btn-primary {
    background-color: #7bdcb5;
    align-items: "center";
    justify-content: "center";
  }
`;


const StyledBreadcrumb = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    height: theme.spacing(3),
    color: theme.palette.grey[800],
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: theme.palette.grey[300]
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12)
    }
  }
}))(Chip); 



const Item = props => {
  const condition = props.bgColor === true;
  const { cart, editItem } = useContext(CartContext);
  const [dataForm, setDataForm] = useState(data);
  
  
  const changeCheck = (id) => {

    
    /* let temp = [...dataForm];
    const index = temp.findIndex((x) => x.id === id);
    if (index === -1) return; */

      let existingItem = cart.find(cartItem => cartItem.id == id);
  
      if (existingItem) {
        
        existingItem.isChecked = true

      } 

    /* temp[index].isChecked = true;
    setDataForm(temp); */

    
  };

  return (
    
    <div className="shopping-cart_item" style={{ display: 'inline-block', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
      
      <Card style={{justifyContent: 'center', alignItems: 'center', backgroundColor: condition ? "#dedede" : "white"}}>
        <div class="row no-gutters">

            <div class="col-auto">
              <Checkbox 
              checked = {props.isChecked}
              onChange={() => {
                changeCheck(props.id);
                }} />

              
            </div>
          
            <div class="col-auto">
              <img style={{ width: '5rem' }} src={props.image} alt={props.title} />
            </div>

            <div class="col" style = {{textAlign: 'center'}}>
                <div class="card-block px-1">
                   
                    <h7 class="card-title">{props.title}</h7>
                    
                </div>
            </div>

            <div class="col-6" style = {{ width: '5rem' }}>
                <div class="card-block px-1" >

                    
                    <Button 
                    type="text"
                    onClick={() => props.removeItem(props.id)}>
                      <b> X </b>
                    </Button>
                   

                </div>
            </div>

            

            
        </div>
        
      </Card>

      <br />
      
    </div>
       
  );
};






function Cart(props) {
  const { cart, removeItem, clearItem, editItem } = useContext(CartContext);
  const [onChange, setOnChange] = React.useState({});

  const handleSubmit = () => {
    
    var i;

      for(i=0; i < cart.length; i++){
        if (cart[i].isChecked == true) 
       
        cart[i].bgColor = true 

      }

      /* still trying to pass the true from isChecked to bgColor, then can move on to making localstorage change values 
      also trying to change the background color based on bgColor not isChecked 
      now bgColor only turns true when i save the cart again / make an edit in the file */
    

    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.reload(true);

    message.success({
      content: 'Successfully Sent !',
      className: 'custom-class',
      style: {
        marginTop: '15vh',
      },
    });
    /*window.location.reload(true);*/
  };


    return (
        <div >
          <div className = "App" style={style}>
            <br />
            
            <Breadcrumbs aria-label="breadcrumb" style={{ marginLeft: '.5rem' }}>
                <StyledBreadcrumb
                    component="a"
                    href="/Home"
                    label="Home"
                    icon={<HomeIcon fontSize="small" />}
                />
            </Breadcrumbs>

           
            <h4 className="title" > Courses in Cart </h4>
            <br />
            

          </div>  
          
          
            <CheckboxGroup 
            onChange={setOnChange} >

            <Card style={{justifyContent: 'center', alignItems: 'center'}}>
              <div class="row no-gutters">
                
                <div class="col-auto">
                  <Space size="small" style={{ marginLeft: '.5rem' }}>
                    <AllCheckerCheckbox />
                    <span>All</span>
                  </Space>

                  <Space size="small" style={{ marginLeft: '13.5rem' }}>
                    <Button 
                      type="text"
                      onClick={() => clearItem(props.cart)}>
                      <b> Delete All </b>
                    </Button>
                  </Space>
                  
                  
                </div>
              </div>
            </Card>
            <br />


            {cart.map(item => (
              <Item key={item.id} {...item} removeItem={removeItem} />
            ))} 

            </CheckboxGroup>

            <div className="shopping-cart__checkout">
              {/* <p>Total: ${getCartTotal()}</p> */}
              <ButtonContainer2>
              <Button 
              type="primary"
              size="large"
              onClick={() => handleSubmit()} >
                Seek Approval for Courses</Button>
              </ButtonContainer2>
              <br />
              
            </div>
          

          
        

        </div>
    );
};

export default Cart;