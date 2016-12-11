var React = require('react');

var CartStore = require('../stores/CartStore');
var CartActions = require('../actions/CartActions');
var ItemList = require('./ItemList');

function getCartState() {
  return {
    totalItemCount: CartStore.getTotalItemCount()
  };
}

var Cart = React.createClass({
	componentDidMount: function() {
		CartStore.addChangeListener(this._onChange);
		$(".btn").mouseup(function(){
    	$(this).blur();
		});
	},

  componentWillUnmount: function() {
    CartStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState(getCartState());
  },

  getInitialState: function() {
  	return getCartState();
  },

  render: function() {
    return (
    	<button 
    		className='btn btn-default'
    		onClick={CartActions.checkout}
    	>
    		Cart <span className='glyphicon glyphicon-shopping-cart'></span> {this.state.totalItemCount}
    	</button>
    );
  },
  checkout: function() {
  	console.log('Checkout');
  }
}); 

module.exports = Cart;