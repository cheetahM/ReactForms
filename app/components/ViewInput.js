var React = require('react');

function ViewInput (props) {
  return (
    <div className='text-field'>
    <label htmlFor={props.id}>{props.text}</label>
    <input
      type={props.type}
      id={props.id}
      onChange={props.updateInput}
      placeholder={props.placeholder}
      value={props.value}
      onFocus={props.onFocus}
       onBlur={props.onBlur} />
    </div>
  )
}

module.exports = ViewInput;
