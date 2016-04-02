var React = require('react');
var ViewInput = require('./ViewInput');

function puke(obj) {
  return <pre>{JSON.stringify(obj, 2, ' ')}</pre>
}

function FormFieldWrapper (props) {
  console.log(props.isLabelFloating);
  const placeholder = props.isLabelFloating ? props.placeholder : null;
    const labelClass = props.isLabelFloating ? 'is-floating' : null;
  return (
    <div className='form-field'>
      <ViewInput
        type={props.type}
        id={props.id}
        text={props.text}
        updateInput={props.onUpdate}
        placeholder={placeholder}
        isLabelFloating={props.isLabelFloating}
        onFocus={props.onFocus}
         onBlur={props.onBlur} />
    </div>
  )
}

module.exports = FormFieldWrapper;
