import React, { Component } from 'react';
import PathwayDetails from "./pathwayDetails";
import SearchBar from '../NavBar/searchBar';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import axios from 'axios';



const style = {
    color: '#455A64',
    textAlign: 'left',
    
    
  };

 


function LearningPathway(props) {

    function componentDidMount() {
        const api = 'https://o5shq9fg76.execute-api.us-east-1.amazonaws.com/staging';
        const data = { "name" : "Gregory" };
        axios
          .post(api, data)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
        }
        
  

    return (

        <div className="container">
            <SearchBar /> 
            <hr />
            <Button onClick={() => componentDidMount()}> Lambda Function Test </Button>
            <hr /> 
            <Link to ="/courseDB" >
            <Button> Dynamo Database Test </Button>
            </Link>
            <Link to ="/searchGG" >
            <Button> Search Bar Test </Button>
            </Link>
            <hr />
            <h2 style={style}> Learning Pathway </h2>
            <hr />
            <PathwayDetails />
        </div>

    );
};

export default LearningPathway;