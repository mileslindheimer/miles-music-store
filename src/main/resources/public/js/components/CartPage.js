var React = require('react');

var CartStore = require('../stores/CartStore');
var CartActions = require('../actions/CartActions');
var Cart = require('./Cart');
var OrderInfo = require('./OrderInfo');

var orderInfo = {id:36,orderItems:[{id:13,product:{id:2,name:"Saxophone",img:"img/products/saxophone.jpg",description:"Instrument of choice for careless whisperers.",price:1300}}], total: 10.325}

function getCartState() {
  return {
    items: CartStore.getAll(),
    itemCounts: CartStore.getItemCounts(),
    total: CartStore.getTotal(),
    orderInfo: CartStore.getOrderInfo()
  };
}

var CartPage = React.createClass({
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
  	var checkedOut = this.state.orderInfo !== null;
    return (
    	<div className='jumbotron'>
    		{checkedOut ? 
    			<OrderInfo
    				orderInfo={this.state.orderInfo}
    			/> :
		    	<Cart
		    		items={this.state.items}
		    		itemCounts={this.state.itemCounts}
		    		total={this.state.total}
		    	/>
	    	}
	    </div>
    );
  }
}); 

module.exports = CartPage;