var React = require('react');

var Navbar = React.createClass({
  componentDidMount: function() {
    $("button").mouseup(function(){
      $(this).blur();
    });
    $('button').click(function(){
      $('.collapse').collapse('toggle')
    });
    $('.nav a').click(function(){
      $(".navbar-toggle").click();
    });
  },
  render: function() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#home">Miles Music Store</a>
            </div>
            
          </div>
        </nav>
        {this.props.children}  
      </div>
    )
  }
});

module.exports = Navbar;