var React = require('react');

var CartActions = require('../actions/CartActions');

var Item = React.createClass({
	componentDidMount: function() {
		$(".btn").mouseup(function(){
    	$(this).blur();
		});
	},
  render: function() {
    var price = this.props.item.price.toFixed(2);
    return (
    	<li className='item row'>
      	<div className='col-md-2'>
      		{this.props.item.name}
      	</div>
      	<div className='col-md-2'>
      		Price: ${price}
      	</div>
      	<div className='col-md-2'>
      		Count: {this.props.count}
      	</div>
      	<div className='btn-group'>
	      	<button 
	      		className='btn btn-default'
	      		onClick={this.increment.bind(this,this.props.item)}
	      	>
	      		<span className='glyphicon glyphicon-plus'>
		      	</span>
	      	</button>
	      	<button 
	      		className='btn btn-default'
	      		onClick={this.decrement.bind(this,this.props.item)}
	      	>
	      		<span className='glyphicon glyphicon-minus'>
		      	</span>
	      	</button>
	      	<button 
	      		className='btn btn-danger'
	      		onClick={this.removeFromCart.bind(this,this.props.item)}
	      	>
	      		<span className='glyphicon glyphicon-remove'>
		      	</span>
	      	</button>
      	</div>
      </li>
    );
  },
  increment: function(item) {
  	CartActions.addToCart(item.id, item);
  },
  decrement: function(item) {
  	this.props.decrement(item.id, item);
  },
  removeFromCart: function(item) {
  	CartActions.removeFromCart(item.id);
  }
});

module.exports = Item;