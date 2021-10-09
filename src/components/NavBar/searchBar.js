import React, { useState } from "react";
import { Button } from 'reactstrap';
import Navbar from 'react-bootstrap/Navbar'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import { NavDropdown } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';
import CatalogueItems from './catalogueItems'
import { Accordion, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import Subcategory from './subcategory'


const course = [
    {
        courseid: '1',
        coursename: 'Journey of being a Nurse'
    },
    {
        courseid: '2',
        coursename: 'Theory of Biology'
    },
]

function SearchBar() {
    const [id, setId] = useState("");
    const [callfrm, setCallfrm] = useState("");
    const [click, setClick] = useState(false);

    function handleClick(cid, callfrom) {
        //e.preventDefault();
        // console.log(catid);

        setId(cid);
        setCallfrm(callfrom);
        setClick(true);
    }

    return (
        <div>

            <Form className="d-flex">
                <FormControl
                    type="search"
                    allowClear
                    placeholder="Search for courses by keyword(s)"
                    className="mr-2"
                    aria-label="Search"
                />
            <Button background-color= '#597ef7' variant="outline-success">Search</Button>
            </Form>


            {click ? < Subcategory catid={id} callfrm={callfrm} /> :
                <Accordion>
                    <Card>
                        <Accordion.Toggle as={Button} eventKey="0">
                            <div className="d-flex justify-content-between Collapsible__trigger"> Catalogue </div>
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="0">
                            <Card.Body><a onClick={() => { handleClick("1", "Catalogue") }}>Clinical-Contiuning Education</a></Card.Body>
                        </Accordion.Collapse>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body><a onClick={() => { handleClick("2", "Catalogue") }}>Community</a></Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    <Card>
                        <Accordion.Toggle as={Button} eventKey="1">
                            <div className="d-flex justify-content-between Collapsible__trigger"> Roadmap</div>
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="1">
                            <Card.Body><a onClick={() => { handleClick("3", "Roadmap") }}>Family Group</a></Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>}
            
        </div >
    );
};

/* function SearchBar() { 
class SearchBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            id: ""
        }
    }



    handleClick = (cid) => {
        //e.preventDefault();
        console.log(cid);

        this.setState({id: cid});
    }

    render() {
        return (
            <div className="App">
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        allowClear
                        placeholder="Search for courses by keyword(s)"
                        className="mr-2"
                        aria-label="Search"
                    />
                    <Button background-color= '#597ef7' variant="outline-success">Search</Button>
                </Form>

                

      


                {(this.state.id !== '') && < Subcategory catid={this.state.id} /> }
                {(this.state.id === '') &&  
                <Accordion>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            Catalogue
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="0">
                            <Card.Body><a onClick={() => this.handleClick("1")}>Clinical-Contiuning Education</a></Card.Body>
                        </Accordion.Collapse>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body><a onClick={() => this.handleClick("2")}>Community</a></Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            Roadmap
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="1">
                            <Card.Body>Family Group</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>}
            </div >
           
        );
    }*/


    /* <Navbar bg="light" expand="sm" expanded="true">
            <Navbar.Collapse>
                <Nav className="mr-auto" >
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Type to Search"
                            className="mr-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <NavDropdown title="Catalogue">
                        <Nav.Link as={Link} to="/subcategory">Clinical-Contiuning Education</Nav.Link>
                        <NavDropdown.Divider />
                        <Nav.Link as={Link} to="/catalogueItems">Community</Nav.Link>
                        <NavDropdown.Divider />
                        <Nav.Link href="#home">Conference/Seminar</Nav.Link>
                        <NavDropdown.Divider />
                        <Nav.Link href="#home">Leadership/OD</Nav.Link>
                        <NavDropdown.Divider />
                        <Nav.Link href="#home">People Development</Nav.Link>
                        <NavDropdown.Divider />
                        <Nav.Link href="#home">Quality & Safety</Nav.Link>
                        <NavDropdown.Divider />
                        <Nav.Link href="#home">Research/Education</Nav.Link>
                    </NavDropdown>
                    <NavDropdown title="Roadmap">
                        <NavDropdown.Item href="#action/1">Family Group</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/2">Job Band</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3">Tracks</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/4">Additional Option</NavDropdown.Item>
                    </NavDropdown>
                </Nav>

            </Navbar.Collapse>
        </Navbar> */



  


export default SearchBar;