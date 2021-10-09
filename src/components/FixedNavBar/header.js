import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import { Button } from 'reactstrap';
import Container from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import CartContext from '../../contexts/CartContext';



const style= {
    display: 'inline-block',
	position: 'relative',
	top: '-8px',
	left: '0px',
	fontWeight: 'bold',
	lineHeight: '18px',
	textAlign: 'center',
    color: 'white',
	background: 'lightcoral',
	borderRadius: '100%',
	width: '18px',
	height: '18px',
}

function Header() {
    
    
    const { cart } = useContext(CartContext);
    return (
        <div className="App">
            <Navbar  expand="lg" bg="white" variant="light" sticky="top">
                <Link to =''>
                <img
                display="flex"
                style={{ alignSelf: 'left' }}
                src="data:image/png;base64,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"
                width="70"
                height="70"
                className="logo"
                alt="TTSH Bootstrap logo"
                /> </Link> {' '}
                <h5 style={{ color: '#455A64' }} alignSelf= "center"> <b> TTSH Learning Catalogue </b> </h5> 
                

                
                <Nav.Link as={Link} to="/cart">
                <img 
                src="https://res.cloudinary.com/sivadass/image/upload/v1493548928/icons/bag.png"
                width="25"
                height="25"
                className="cart-icon"
                alt="Cart"/>  <span style = { style } >{cart.length}</span>
                </Nav.Link>
                

            </Navbar>
            <hr />
        </div>

        /*  <div>
             <div >
                 <div >
                     <img
                         className="logo"
                         src="https://res.cloudinary.com/sivadass/image/upload/v1493547373/dummy-logo/Veggy.png"
                     />
                 </div>
                 <div >
                     Learning Catalogue
                 </div>
                 <div>
                     <a className="cart-icon" href="#">
                         <img
                             src="https://res.cloudinary.com/sivadass/image/upload/v1493548928/icons/bag.png"
                             alt="Cart"
                         />
                     </a>
                 </div>
             </div>
         </div> */
    );
};

export default Header;