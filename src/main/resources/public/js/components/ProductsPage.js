var React = require('react');

var ProductList = require('./ProductList');
var ProductStore = require('../stores/ProductStore');
var ProductActions = require('../actions/ProductActions');

function getProductsPageState() {
  return {
    products: ProductStore.getAll()
  };
}

var ProductsPage = React.createClass({
	componentDidMount: function() {
		ProductStore.addChangeListener(this._onChange);
		ProductActions.getAll();
	},

  componentWillUnmount: function() {
    ProductStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState(getProductsPageState());
  },

  getInitialState: function () {
  	return getProductsPageState();
  },

  render: function() {
    return (
      <div className='page-header'>
        <h1>Products</h1>
        <ProductList 
        	products={this.state.products} 
        />
      </div>
    )
  }
});

module.exports = ProductsPage;