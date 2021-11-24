import React from "react";
import ReactDOM from "react-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { Image } from 'antd';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';


const style = {
  height: 60,
  border: "1px solid black",
  margin: 6,
  padding: 8,
  display: "flex",
  flex:1,
  alignItems: 'center'
};



class PathwayDetails extends React.Component {

  state = {
    items: Array.from({ length: 20 })
  };

  fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 20 }))
      });
    }, 1500);
  };

  constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			dataSource: {}
		};
	}

	async componentDidMount() {
		try {
			const response = await fetch(' https://p0308ff2i2.execute-api.us-east-1.amazonaws.com/stagingTest');
			let responseJson = await response.json();
			this.setState(
				{
					isLoading: false,
					dataSource: responseJson
				},
				function() {}
			);
		} catch (error) {
			console.error(error);
		}
	}

  render() {
    let { dataSource } = this.state;
    if (this.state.isLoading) {
      console.log(dataSource)
        return <div>Loading...</div>;
    } else {
      return (
      <div>


        <Link to ="/learningpathway2" >
        <div style={style}>
        <img 
        className = "display: inline-block"
        width={50}
        height={50}
        src = "https://testbucketondo.s3.amazonaws.com/1.jpg" 
        /> {' '}
          <text> Quality </text>
        </div>
        </Link>
        
        

        <InfiniteScroll
          dataLength={dataSource.Items.length}
          next={dataSource.fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >

          
          {dataSource.Items.map(item => (
            
            <div style={style} key={item.pathwaycategoryID}>
              <img 
              className = "display: inline-block"
              width={50}
              height={50}
              src = {item.image} 
              /> {' '}
              {item.category}
            </div>
            
          ))}
        </InfiniteScroll>
      </div>
    );
  }
}
}

export default PathwayDetails;
