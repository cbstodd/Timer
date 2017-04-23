const React               = require('react'),
      { Link, IndexLink } = require('react-router');

const Nav = React.createClass({
    onSearch: function( e ){
        // Prevents page from reloading.
        e.preventDefault();

        // Code to make onSearch do something.
   
    },

    render: function(){
        return (
          <div>
              <nav className="navbar navbar-toggleable-md navbar-inverse bg-info">
                  <div className="container">
                      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                      </button>

                      <span className="navbar-brand">ReactBoilerplate</span>

                      <div className="collapse navbar-collapse" id="navbarNav">
                          <ul className="navbar-nav mr-auto">
                              <li className="nav-item">
                                  <IndexLink className="nav-link" to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Home</IndexLink>
                              </li>
                          </ul>
                          <form className="form-inline my-2 my-lg-0" onSubmit={this.onSearch}>
                              <input className="form-control mr-sm-2" type="search" placeholder="Search city" ref="search"/>
                              <button className="btn btn-default my-2 my-sm-0" type="submit">Search</button>
                          </form>
                      </div>
                  </div>
              </nav>
          </div>
        )
    }
});

module.exports = Nav;