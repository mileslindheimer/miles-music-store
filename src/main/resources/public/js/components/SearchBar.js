var React = require('react');

var ProductStore = require('../stores/ProductStore');
var ProductActions = require('../actions/ProductActions');

var SearchBar = React.createClass({
  componentDidMount: function() {
    $("button").mouseup(function(){
      $(this).blur();
    });
  },
  getInitialState: function() {
    return {
      filterText: ''
    }
  },
  handleChange: function(event) {
    var filterText = event.target.value;
    ProductActions.filter(filterText);
    this.setState({
      filterText: filterText 
    });
  },
  render: function() {
    return (
      <div>
        <input 
          type="text" 
          className="form-control" 
          placeholder="Search" 
          onChange={this.handleChange}
        />
        {/*
        <div className="input-group-btn">
          <button type="submit" className="btn btn-default">
            <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
          </button>
        </div>
        */}
      </div>
    )
  }
});

module.exports = SearchBar;