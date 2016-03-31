var React = require('react');

function ViewInput (props) {
  return (
    <div>
    <label htmlFor={props.id}>{props.text}</label>
    <input
      type={props.type}
      id={props.id}
      onChange={props.updateInput}
      placeholder={props.placeholder}
      value={props.value} />
    </div>
  )
}

module.exports = ViewInput;
