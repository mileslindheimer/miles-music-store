var React = require('react');

var ContactPage = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Contact</h1>
          <div className="contact-info panel panel-default panel-body">
            <p><img src="img/contact/1a03c9b.jpg" /></p>

            <p>Email: <strong><a href=
            "mailto:mileslindheimer@gmail.com">mileslindheimer@gmail.com</a></strong></p>

            <p>Github: <strong><a href=
            "http://github.com/mileslindheimer" target=
            "_blank">mileslindheimer</a></strong></p>

            <p><strong><a href="img/contact/Resume.pdf" target=
            "_blank">Resume</a></strong></p>
        </div>
      </div>
    )
  }
});

module.exports = ContactPage;