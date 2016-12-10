var React = require('react');
var Link = require('react-router').Link;

var CartActions = require('../actions/CartActions');

var ProductDetail = React.createClass({
	componentDidMount: function() {
		$(".btn").mouseup(function(){
    	$(this).blur();
		});
	},
  addToCart: function(product) {
    var item = product;
    CartActions.addToCart(product.id, product);
  },
  render: function() {
    return (
      <div className='jumbotron'>
        <h1>
          <a href='#projects' className='btn btn-default back btn-arrow-left' role='button'>
            Back
          </a>
          {this.props.product.name}
        </h1>
    		<div className='row'>
      		<img src={this.props.product.img} width='300'/>
      	</div>
        <p>${this.props.product.price}</p>
        <p>{this.props.product.description}</p>
        <input
          type='button'
          className='btn btn-primary'
          onClick={this.addToCart.bind(this,this.props.product)} 
          value='Add'
        />
      </div>
    );
  }
}); 

module.exports = ProductDetail;