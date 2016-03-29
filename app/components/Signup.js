var React = require('react');
var FormFieldWrapper = require('./FormFieldWrapper');

function Signup(props){
  return (
    <div>
    <form>
      <fieldset>
        <h1>Create account</h1>
        <h4>Form with field validations</h4>
        <FormFieldWrapper
          id="email"
          type="email"
          label="Email" />
          <FormFieldWrapper
            id="password"
            type="password"
            label="Password" />
          <button type="submit">Submit</button>
      </fieldset>
    </form>
    </div>
  )
}

module.exports = Signup;
