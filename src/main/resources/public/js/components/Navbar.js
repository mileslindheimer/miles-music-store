var React = require('react');

var MiniCart = require('./MiniCart');
var SearchBar = require('./SearchBar');

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
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">


            <div className="navbar-header">
              <a className="navbar-brand" href="#">
                <span className="glyphicon glyphicon-music" aria-hidden="true"></span> Miles Music Store
              </a>
            </div>

              <form className="navbar-form navbar-left" role="search">
                <div className="form-group">
                  <SearchBar />
                </div>
              </form>


              <form className="navbar-form navbar-right">
                <div className="form-group">
                  <MiniCart />
                </div>
              </form>

          </div>
        </nav>
        {this.props.children}  
      </div>
    )
  }
});

module.exports = Navbar;