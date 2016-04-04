var React = require('react');

function ViewInput (props) {
  const placeholder = props.isLabelFloating ? props.placeholder : null;
    const labelClass = props.isLabelFloating ? 'is-floating' : null;
    console.log(props.isLabelFloating);
    console.log(labelClass);
  return (
    <div className='text-field js-hide-label'>
    <label htmlFor={props.id} className={labelClass}>{props.text}</label>
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
