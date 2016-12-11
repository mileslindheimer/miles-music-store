var React = require('react');

var MiniCart = require('./MiniCart');

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
          <div className="row">
            <div className="col-xs-12 col-sm-4 col-md-4">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">
                <span className="glyphicon glyphicon-music" aria-hidden="true"></span> Miles Music Store
              </a>
            </div>
            </div>
            
              <div className="col-xs-6 col-sm-5 col-md-5">
                <form className="navbar-form navbar-left" role="search">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search" />
                    <div className="input-group-btn">
                      <button type="submit" className="btn btn-default">
                        <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-xs-5 col-sm-1 col-md-1 col-xs-offset-1">
                <form className="navbar-form navbar-right">
                  <MiniCart />
                </form>
              </div>
            </div>
          </div>
        </nav>
        {this.props.children}  
      </div>
    )
  }
});

module.exports = Navbar;