var React = require('react');
var request = require('superagent');
var Header = require('./components/Header.jsx');
var ReactDOM = require('react-dom');
// var Pokedex = require('./components/Pokedex.jsx');


var App = React.createClass({
  render: function() {
    return(
      <main>
      <Header />
      </main>
    )
  }
})

var element = React.createElement(App);


ReactDOM.render(element, document.body)
