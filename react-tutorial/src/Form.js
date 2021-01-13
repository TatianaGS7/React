import React, {Component} from 'react';

class Form extends Component {
   constructor(props) {   
	 super(props);    
	  this.initialState = {product: '', price: '',};
	  this.state = this.initialState; 
	}

	handleChange = (event) => {
	  const {name, value} = event.target;

	  this.setState({
	    [name]: value
	  });
	}

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
	  const { product, price } = this.state;

	  return (
	    <form onSubmit={this.onFormSubmit}>
	      <label htmlFor="product">Product</label>
	      <input
	        type="text"
	        name="product"
	        id="product"
	        value={product}
	        onChange={this.handleChange} />
	      <label htmlFor="price">Price</label>
	      <input
	        type="text"
	        name="price"
	        id="price"
	        value={price}
	        onChange={this.handleChange} />
	        <button type="submit">OK</button>
	    </form>
	  );
	}

}

export default Form;
