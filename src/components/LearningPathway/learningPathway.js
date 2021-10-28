import React from "react";
import PathwayDetails from "./pathwayDetails";
import SearchBar from '../NavBar/searchBar';
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
            <SearchBar /> <br/>
            <button onClick={() => componentDidMount()}> Lambda Function Test </button>
            <hr />
            <h2 style={style}> Learning Pathway </h2>
            <hr />
            <PathwayDetails />
        </div>

    );
};

export default LearningPathway;