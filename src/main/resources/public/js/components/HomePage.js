var React = require('react');

var ProductsPage = require('./ProductsPage');
var Cart = require('./Cart');

var HomePage = React.createClass({
	componentDidMount: function() {
		$(".btn").mouseup(function(){
    	$(this).blur();
		});
	},

  render: function() {
    return (
    	<div>
	      <div className='jumbotron'>
	      	<ProductsPage />
	      </div>
      </div>
    );
  }
}); 

module.exports = HomePage;