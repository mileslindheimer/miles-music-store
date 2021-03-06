var React = require('react');
var Link = require('react-router').Link;

var CartActions = require('../actions/CartActions');

var ProductDetail = React.createClass({
	componentDidMount: function() {
		$(".btn").mouseup(function(){
    	$(this).blur();
		});
    $(".btn-lg").mouseup(function(){
      $(this).blur();
    });
	},
  addToCart: function(product) {
    var item = product;
    CartActions.addToCart(product.id, product);
  },
  render: function() {
    var price = this.props.product.price === null ? null : this.props.product.price.toFixed(2);
    return (
      <div className='jumbotron'>
        <div className='row'>
          <a href='#/' className='btn-lg btn-default back' role='button'>
            Back
          </a>
          <h1>
            {this.props.product.name}
          </h1>
        </div>
    		<div className='row'>
      		<img src={this.props.product.img} width='300'/>
      	</div>
        <p>${price}</p>
        <p>{this.props.product.description}</p>
        <input
          type='button'
          className='btn-lg btn-primary'
          onClick={this.addToCart.bind(this,this.props.product)} 
          value='Add To Cart'
        />
      </div>
    );
  }
}); 

module.exports = ProductDetail;