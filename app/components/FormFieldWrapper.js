var React = require('react');
var ViewInput = require('./ViewInput');

function puke(obj) {
  return <pre>{JSON.stringify(obj, 2, ' ')}</pre>
}

function FormFieldWrapper (props) {
  return (
    <div>
      <ViewInput
        type={props.type}
        id={props.id}
        text={props.text}
        updateInput={props.onUpdate}
        placeholder={props.placeholder} />
    </div>
  )
}

module.exports = FormFieldWrapper;
