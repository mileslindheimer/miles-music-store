var React = require('react');

var Product = require('./Product')

var ProductList = React.createClass({
  render: function() {
		var products = [];
		var that = this;
    var rowNum = 0;
    var loader = <div className='loader'></div>
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
      	{products.length == 0 ?
          loader
          : products}
    	</div>
    );
  }
}); 

module.exports = ProductList;