var React = require('react');
var PropTypes = React.PropTypes;
var FormFieldWrapper = require('./FormFieldWrapper');
var transparentBg = require('../styles').transparentBg;
var styles = require('../styles');

var Signup = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
/*  propTypes: {
    value: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
  }, */
  getInitialState: function() {
    return {
      email: null,
      password: null,
      isLabelFloating: false
    }
  },
  componentDidMount: function(e) {

  },
  handleFocus() {
    console.log("handle focus");
   this.setState({isLabelFloating: true});
 },

 handleBlur(e) {
   if (!e.target.value) {
     this.setState({isLabelFloating: false});
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
      <div className='jumbotron col-sm-12 text-center' style={transparentBg}>
      <h1 className='title'>Create account</h1>
      <p>Example of form validation built with React.</p>
      <form className='form-control' onSubmit={this.onSubmitCreateAccount}>
        <fieldset>
          <FormFieldWrapper
            id="email"
            type="email"
            text="Email"
            value={this.state.email}
            placeholder='Enter Email'
            isLabelFloating={this.state.isLabelFloating}
            onUpdate={this.updateEmailAddress}
            onFocus={this.handleFocus.bind(this)}
            onBlur={this.handleBlur.bind(this)} />
          <FormFieldWrapper
            id="password"
            type="password"
            text="Password"
            value={this.state.password}
            placeholder='Enter Password'
            isLabelFloating={this.state.isLabelFloating}
            onUpdate={this.updatePassword}
            onFocus={this.handleFocus.bind(this)}
            onBlur={this.handleBlur.bind(this)} />
          <button className='btn-submit' type="submit">Submit</button>
        </fieldset>
      </form>
      </div>
    )
  }
});

module.exports = Signup;
