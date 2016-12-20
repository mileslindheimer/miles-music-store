var React = require('react');

var CartActions = require('../actions/CartActions');
var ItemList = require('./ItemList');

var Cart = React.createClass({
  render: function() {
  	var isEmpty = Object.keys(this.props.items).length == 0;
  	var total = this.props.total.toFixed(2);
    return (

    	<div className='row'>
    		<a href='#/' className='btn-lg btn-default back' role='button'>
          Back
        </a>
    		<div className='col-md-12'>		
	      	<div className='col-md-4 col-md-offset-7'>
	      		<div className='row'>
	      			Total: ${total}
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
				      	<span className='glyphicon glyphicon-credit-card'> Checkout
				      	</span>
			      	</button>
	      		</div>

	      	</div>
	      	
	      	{isEmpty ? 
	      		<div className='col-md-8'>Empty</div> : 
		      	<ItemList 
		      		items={this.props.items} 
		      		itemCounts={this.props.itemCounts}
		      		clearCart={CartActions.clear}
		      		increment={CartActions.addToCart}
		      		decrement={CartActions.decrement}
		      		removeFromCart={CartActions.removeFromCart}
		      	/>
      		}
	      	
	      </div>
      </div>

    );
  }
}); 

module.exports = Cart;