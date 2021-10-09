import React from "react";
import PathwayDetails from "./pathwayDetails";
import SearchBar from '../NavBar/searchBar';

const style = {
    color: '#455A64',
    textAlign: 'left',
    
    
  };



function LearningPathway(props) {
    return (

        <div className="container">
            <SearchBar />
            <hr />
            <h2 style={style}> Learning Pathway </h2>
            <hr />
            <PathwayDetails />
        </div>

    );
};

export default LearningPathway;