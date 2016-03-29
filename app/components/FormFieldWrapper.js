var React = require('react');
var ViewInput = require('./ViewInput');

function puke(obj) {
  return <pre>{JSON.stringify(obj, 2, ' ')}</pre>
}

function FormFieldWrapper (props) {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <ViewInput type={props.type} id={props.id} />
    </div>
  )
}

module.exports = FormFieldWrapper;
