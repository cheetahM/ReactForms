var React = require('react');
var ReactDOM = require('react-dom');
var Signup = require('./components/Signup');

function CreateAccount(){
  return (
    <div>
      <Signup />
    </div>
  )
}

ReactDOM.render(<CreateAccount />, document.getElementById('app'));
