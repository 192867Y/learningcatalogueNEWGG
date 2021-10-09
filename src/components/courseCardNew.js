import React, { useState, useContext } from "react";
import { Button } from 'react-bootstrap';
import ProductContext from '../contexts/ProductContext';
import CartContext from '../contexts/CartContext';
import { CardDeck, Col, Row } from 'reactstrap';
import { Card, CardBody } from 'reactstrap';
import {
  BrowserRouter as Router,
  generatePath,
  useHistory,
} from "react-router-dom";


const style = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center"

};

    
const CourseCardNEW = props => {
    

    return (
        
        
            <CardDeck >
                <br />
                
                    <Col sm={2}>
                        <div  className="col-md-6" style={{flex: 1}}>
                            <div className="card bwm-card" style={{ width: '12rem' }}>
                              
                              <Card>
                                <img 
                                className="card-img-top" 
                                src={props.product.image}
                                alt={props.product.title} />
                                
                                <CardBody>
                                    <h6 className="card-title big-font">
                                        {props.product.title}
                                    </h6>
                                </CardBody>
                                </Card>

                            </div>
                            <br />
                                        
                        </div>
                    </Col>      
                
            </CardDeck>
        
          
    )
}

const CourseCardNew = () => {
    const { products} = useContext(ProductContext);

    const [id, setId] = useState();
    const history = useHistory();

 
  
    return (
      <Row xs={2} md={4} className="products-container" >
        {products.map(product => (
        <Button 
        style = {style}
        variant="light" 
        variant="outline-light"
        onClick={(e) => {
            setId(product.id);
            id && history.push(generatePath("/products/:id", { id }));
          }}
        >
        <CourseCardNEW key={product.id} product={product} />
        </Button>
        ))}


      </Row>

      
    );
  };
  
  
export default CourseCardNew;