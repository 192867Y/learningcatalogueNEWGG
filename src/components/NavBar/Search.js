import React, { Component } from 'react';
import Autocomplete from  'react-autocomplete';
import { getStocks, matchStocks } from './dataSearch';
import './Search.css';
import Form from 'react-bootstrap/Form'
import { Button } from 'reactstrap';
import FormControl from 'react-bootstrap/FormControl'

class searchGG extends Component {

  state = { value: '' };

  render() {
    return (
      <div style = {{ marginTop: 40, marginLeft: 50 }}>
          <Form className="d-flex">
        <Autocomplete
          value={ this.state.value }
          inputProps={{ id: 'states-autocomplete' }}
          wrapperStyle={{ position: 'relative', display: 'inline-block' }}
          items={ getStocks() }
          getItemValue={ item => item.name }
          shouldItemRender={ matchStocks }
          onChange={(event, value) => this.setState({ value }) }
          onSelect={ value => this.setState({ value }) }
          renderMenu={ children => (
            <div className = "menu">
              { children }
            </div>
          )}
          renderItem={ (item, isHighlighted) => (
            <div
              className={`item ${isHighlighted ? 'item-highlighted' : ''}`}
              key={ item.abbr } >
              { item.name }
            </div>
          )}
        />
        <Button background-color= '#597ef7' variant="outline-success">Search</Button>
            </Form>
      </div>
      );
    }
  }

export default searchGG;