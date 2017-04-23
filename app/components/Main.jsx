const React  = require('react'),
      Nav    = require('Nav');

const Main = ( props ) =>{
    return (
      <div>          
          <Nav/>

          <div className="container">
              <p>Main.jsx rendererd</p>
              <div className="col-sm-12">{props.children}</div>
          </div>
      </div>
    )
};

module.exports = Main;