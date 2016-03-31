var React = require('react');
var transparentBg = require('../styles').transparentBg;

function puke(obj) {
  return <pre>{JSON.stringify(obj, 2, ' ')}</pre>
}

function Success (props) {
  return (
    <div className='jumbotron col-sm-12 text-center' style={transparentBg}>
      <h1>Account created Successfully</h1>
    </div>
  )
}

module.exports = Success;
