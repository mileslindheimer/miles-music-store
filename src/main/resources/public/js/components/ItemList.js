var React = require('react');

var Item = require('./Item');

var ItemList = React.createClass({
  render: function() {
		var items = [];
	  for (key in this.props.items) {
	    items.push( 
	    	<div className='col-md-8' key={key} >
		    	<Item 	
		    		item={this.props.items[key]} 
		    		count={this.props.itemCounts[key]}
		    		increment={this.props.increment}
	      		decrement={this.props.decrement}
		    		removeFromCart={this.props.removeFromCart}
		    	/>
		    </div>
	    );
	  }
	  return (
	  	<ol className='itemList'>
	    	{items}
	  	</ol>
	  );
  }
}); 

module.exports = ItemList;