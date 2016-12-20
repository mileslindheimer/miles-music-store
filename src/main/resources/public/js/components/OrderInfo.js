var React = require('react');

var OrderItem = React.createClass({
	render: function() {
		var price = this.props.price.toFixed(2);
		return (
			<li className='row'>
      	<div className='col-md-4'>
      		{this.props.name}
      	</div>
      	<div className='col-md-4'>
      		${price}
      	</div>
      	<div className='col-md-4'>
      		Count: {this.props.count}
      	</div>
      </li>
		);
	}
}); 

var OrderInfo = React.createClass({
	render: function() {
		var total = this.props.orderInfo.total.toFixed(2);
		var items = {};
		var itemCounts = {};
	  this.props.orderInfo.orderItems.forEach(function(item) {
	  	var productId = item.product.id;
	  	if (!items[productId]) {
	  		items[productId] = item;
	  		itemCounts[productId] = 1;
	  	} else {
	  		itemCounts[productId]++;
	  	}
	  });
	  var orderItems = [];
	  for (var id in items) {
	    orderItems.push( 
	    	<div className='col-md-12' key={id}>
	    		<OrderItem 
	    			name={items[id].product.name}
	    			price={items[id].product.price}
	    			count={itemCounts[id]}
	    		/>
		    </div>
	    );
	  }
    return (
    	<div className='jumbotron'>
    		<h2>Receipt</h2>
    			<p>Confirmation #{this.props.orderInfo.id}</p>
    			<p>Total: ${total}</p>
    			<ol>
    				{orderItems}
    			</ol>
	    </div>
    );
  }
}); 

module.exports = OrderInfo;