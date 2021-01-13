import React, {Component} from 'react';
import Table from './Table';
import Form from './Form';

class App extends React.Component {
	constructor(props) {   
	 super(props);    
	 this.state = {records: [],}; 
	}

	removeRecord = (index) => {
	  this.setState({
	    records: this.state.records.filter((record, i) => {
	      return i !== index;
	    }),
	  })
	}

	handleSubmit = record => {
        this.setState({records: [...this.state.records, record]});
    }

  render() {
    return (
      <div className="container">
        <h2>Shopping list</h2>
        <Table recordData={this.state.records} removeRecord={this.removeRecord} />
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default App;