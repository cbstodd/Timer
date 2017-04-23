const React       = require('react'),
      ReactDOM    = require('react-dom'),
      FontAwesome = require('react-fontawesome'),
      styles      = require('app/css/main.css'),
      Main        = require('Main');     

const { 
    Route, 
    Router, 
    IndexRoute, 
    hashHistory 
    } = require('react-router');      


ReactDOM.render(
  <Router history={hashHistory}>
      <Route path="/" component={Main}>           
        <IndexRoute />
      </Route>
  </Router>,

  document.getElementById('app')
);




