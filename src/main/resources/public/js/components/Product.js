var React = require('react');
var Link = require('react-router').Link;

var Product = React.createClass({
	componentDidMount: function() {
		$(".btn").mouseup(function(){
    	$(this).blur();
		});
	},
  render: function() {
    var price = this.props.product.price.toFixed(2);
    return (
      <div className='col-sm-6 col-md-4 panel panel-default panel-body project-thumbnail'>
        <Link to={'products/'+this.props.product.id}>
      	<div className='thumbnail'>
          <img src={this.props.product.img}/>
      	</div>
        <h3>{this.props.product.name}</h3>
        <p>${price}</p>
        </Link>
      </div>
    );
  }
}); 

module.exports = Product;