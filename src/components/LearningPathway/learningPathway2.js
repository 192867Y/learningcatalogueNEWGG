import React from "react";
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Space } from 'antd';
import { emphasize, withStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Chip from "@material-ui/core/Chip";
import HomeIcon from "@material-ui/icons/Home";
import styled from 'styled-components';
import CourseCardNew from '../courseCardNew';




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







function LearningPathway2(props) {
    return (
        <div >
          <div className = "App" style={style}>

            <br />
            
            <Breadcrumbs aria-label="breadcrumb">

                <StyledBreadcrumb
                    component="a"
                    href="/Home"
                    label="Home"
                    icon={<HomeIcon fontSize="small" />}
                    
                />
                <StyledBreadcrumb
                    component="a"
                    href="/"
                    label="LearningPathway"
                    
                />
                <StyledBreadcrumb
                    component="a"
                    href="/learningpathway2"
                    label="Quality"
     
                />


            </Breadcrumbs>

            <br />
            <h7> Quality (19) </h7>
            <br /><br />

            <ButtonContainer>
            <Space size="large">
            <Link to="/Learning Catalog">
            <Button type="primary" size="large"> Quality and Improvement </Button>
            </Link>
            <Button type="primary" size="large"> Service Excellence </Button>
            </Space>
            <br /><br />
            </ButtonContainer>


          </div>  

          <CourseCardNew />

        </div>
    );
};

export default LearningPathway2;