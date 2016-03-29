var React = require('react');

function puke(obj) {
  return <pre>{JSON.stringify(obj, 2, ' ')}</pre>
}

function Success (props) {
  return (
    <div>
      <h1>Account created Successfully</h1>
    </div>
  )
}

module.exports = Success;
