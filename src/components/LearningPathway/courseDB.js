import React, { Component } from 'react';

const style = {

    backgroundColor: "#D9E3F0",
    textAlign: 'center'

  };

const style3 = {
	textAlign: 'left',
	justifyContent: "left"
  
	};

class courseDB extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			dataSource: {}
		};
	}

	async componentDidMount() {
		try {
			const response = await fetch('https://sd4wl80id2.execute-api.us-east-1.amazonaws.com/testing');
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
					{dataSource.Items.map(item => (
						<div key={item.courseID}>
     				 		<div className="App">
          						<hr style={style} />
          							<h5 className="title" style={style}> {item.courseTitle} </h5>
          						<hr style={style} />
      						</div>	


							<p style = {style3}> 
      						<b> Course Code: </b> {item.courseCode} <br /><br />
      						<b> Clinical/Non-Clinical: </b> {item.clinicalType} <br /><br />
      						<b> Course Overview: </b> {item.courseOverview} <br /><br />
      						<b> Pre-requisite: </b> {item.preRequisite} <br /><br />
      						<b> Target Audience: </b> {item.audience} <br /><br />
      						<b> Modality: </b> {item.modality} <br /><br />
      						<b> Duration: </b> {item.duration} <br /><br />
      						<b> Course Fee: </b> ${item.price} <br /><br />
      						</p>
						</div>
					))}
				</div>
			);
		}
	}
};

export default courseDB;