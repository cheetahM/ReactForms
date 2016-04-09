var React = require('react');

var Main = React.createClass({
  render: function() {
    return (
      <div className="flex-container">
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
