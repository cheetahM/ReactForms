var React = require('react');

function ViewInput (props) {
  return (
    <div>
    <label htmlFor={props.id}>{props.text}</label>
    <input
      type={props.type}
      id={props.id}
      onChange={props.updateInput}
      placeholder={props.placeholder} />
    </div>
  )
}

module.exports = ViewInput;
