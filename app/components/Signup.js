var React = require('react');
var FormFieldWrapper = require('./FormFieldWrapper');

var Signup = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      email: null,
      password: null
    }
  },
  updateEmailAddress: function(e) {
    console.log(e.target.value);
    this.setState({
      email:e.target.value
    });
  },
  updatePassword: function(e) {
    this.setState({
      password: e.target.value
    })
  },
  onSubmitCreateAccount: function(e) {
    e.preventDefault();
    var email = this.state.email;
    var password = this.state.password;
    this.context.router.push({
      pathname: '/success',
      state: {
        email: this.state.email
      }
    })
  },
  render: function() {
    return (
      <div>
      <form onSubmit={this.onSubmitCreateAccount}>
        <fieldset>
          <h1>Create account</h1>
          <p>Example of form validation built with React.</p>
          <FormFieldWrapper
            id="email"
            type="email"
            text="Email"
            value={this.state.email}
            placeholder='Enter Email'
            onUpdate={this.updateEmailAddress}/>
          <FormFieldWrapper
            id="password"
            type="password"
            text="Password"
            value={this.state.password}
            placeholder='Enter Password'
            onUpdate={this.updatePassword} />
          <button type="submit">Submit</button>
        </fieldset>
      </form>
      </div>
    )
  }
});

module.exports = Signup;
