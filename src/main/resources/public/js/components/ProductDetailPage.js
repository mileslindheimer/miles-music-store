var React = require('react');

var ProductDetail = require('./ProductDetail');
var ProductStore = require('../stores/ProductStore');
var ProductActions = require('../actions/ProductActions');

var emptyProduct = {
	name: '',
	img: '',
	description: '',
	price: null
};

function getProductDetailPageState() {
	var product = ProductStore.getProductDetail();
  return {
    product: product != null ? product : emptyProduct
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
    return (
      <div>
        <ProductDetail 
        	product={this.state.product} 
        />
      </div>
    )
  }
});

module.exports = ProductDetailPage;