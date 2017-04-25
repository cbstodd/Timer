const React  = require('react'),
      Navbar = require('Navbar');

const Main = ( props ) =>{
    return (
      <div>
          <Navbar/> {/* NAVBAR */}

          <div className="container">
              <p>Main.jsx rendererd</p>
              <div className="col-sm-12">{props.children}</div>
          </div>
      </div>
    )
};

module.exports = Main;