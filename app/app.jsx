const React       = require('react'),
      ReactDOM    = require('react-dom'),
      FontAwesome = require('react-fontawesome'),
      styles      = require('app/css/main.css'),
      Main        = require('Main'),
      Timer       = require('Timer'),
      Countdown   = require('Countdown');

const {
          Route,
          Router,
          IndexRoute,
          hashHistory
      } = require('react-router');


ReactDOM.render(
  <Router history={hashHistory}>
      <Route path="/" component={Main}>
          <Route path="countdown" component={Countdown}/>
          <IndexRoute component={Timer}/> {/* Renders anything else not defined */}
      </Route>
  </Router>,

  document.getElementById('app')
);




