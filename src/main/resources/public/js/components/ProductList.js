var React = require('react');

var Product = require('./Product')

var ProductList = React.createClass({
  render: function() {
		var products = [];
		var that = this;
    var rowNum = 0;
  	this.props.products.forEach(function(product) {
    	products.push(
    		<Product 
    			key={product.name} 
    			product={product} 
    		/>
    	);
  	});
    return (
    	<div className='container-fluid text-center projectlist'>
      	{products}
    	</div>
    );
  }
}); 

module.exports = ProductList;