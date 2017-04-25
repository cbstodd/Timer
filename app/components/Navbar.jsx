const React               = require('react'),
      { Link, IndexLink } = require('react-router');

const Navbar = React.createClass({
    onSearch: function( e ){
        // Prevents page from reloading.
        e.preventDefault();

        // Code to make onSearch do something.

    },

    render: function(){
        return (
          <div>
              <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                  <div className="container">
                      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                      </button>

                      <IndexLink to="/"><span className="navbar-brand" >ReactBoilerplate</span></IndexLink>

                      <div className="collapse navbar-collapse" id="navbarNav">
                          <ul className="navbar-nav mr-auto">
                              <li className="nav-item">
                                  <IndexLink to="/" className="nav-link" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Timer</IndexLink>
                              </li>
                              <li className="nav-item">
                                  <Link to="/countdown" className="nav-link" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Countdown</Link>
                              </li>
                          </ul>
                          <a href="http://colinstodd.com" className="navbar-text" target="_blank">Colper</a>

                      </div>
                  </div>
              </nav>
          </div>
        )
    }
});

module.exports = Navbar;