var React = require('react');

var ProductDetail = require('./ProductDetail');
var ProductStore = require('../stores/ProductStore');
var ProductActions = require('../actions/ProductActions');

function getProductDetailPageState() {
	var product = ProductStore.getProductDetail();
  return {
    product: product
  };
}

var ProductDetailPage = React.createClass({
	componentDidMount: function() {
		ProductStore.addChangeListener(this._onChange);
		ProductActions.getById(this.props.params.id);
	},

  componentWillUnmount: function() {
    ProductStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState(getProductDetailPageState());
  },

  getInitialState: function () {
  	return getProductDetailPageState();
  },

  render: function() {
    var loader = <div className='loader'></div>
    return (
      <div>
        {this.state.product == null ?
          loader
          : <ProductDetail 
        	product={this.state.product} 
        />}
      </div>
    )
  }
});

module.exports = ProductDetailPage;