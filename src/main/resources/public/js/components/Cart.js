var React = require('react');

var CartStore = require('../stores/CartStore');
var CartActions = require('../actions/CartActions');
var ItemList = require('./ItemList');

function getCartState() {
  return {
    items: CartStore.getAll(),
    itemCounts: CartStore.getItemCounts(),
    total: CartStore.getTotal()
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
  	var isEmpty = Object.keys(this.state.items).length == 0;
    return (
    	<div className='jumbotron'>
	    	<div className='row'>
	    		<div className='col-md-12'>		
	    			<a href='#/' className='btn-lg btn-default back' role='button'>
	            Back
	          </a>
		      	<div className='col-md-4 col-md-offset-7'>
		      		<div className='row'>
		      			Total: ${this.state.total}
		      		</div>

		      		<div className='row btn-group'>
				      	<button 
				      		className='btn btn-default'
				      		disabled={isEmpty}
				      		onClick={CartActions.clear}
				      	>
				      		<span className='glyphicon glyphicon-trash'> Clear
					      	</span>
				      	</button>
				      	<button 
				      		className='btn btn-default'
				      		disabled={isEmpty}
				      		onClick={CartActions.checkout}
				      	>
					      	<span className='glyphicon glyphicon-shopping-cart'> Checkout
					      	</span>
				      	</button>
		      		</div>

		      	</div>
		      	
		      	{isEmpty ? 
		      		<div className='col-md-8'>Empty</div> : 
			      	<ItemList 
			      		items={this.state.items} 
			      		itemCounts={this.state.itemCounts}
			      		clearCart={CartActions.clear}
			      		increment={CartActions.addToCart}
			      		decrement={CartActions.decrement}
			      		removeFromCart={CartActions.removeFromCart}
			      	/>
	      		}
		      	
		      </div>
	      </div>
	    </div>
    );
  },
  checkout: function() {
  	console.log('Checkout');
  }
}); 

module.exports = Cart;