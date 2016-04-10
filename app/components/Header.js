var React = require('react');

function Header (props) {
  return (
    <div className="header-flex-container">
      <div className="flex-item">
        <h2>Home</h2>
      </div>
      <div className="flex-item">
        <h2>About</h2>
      </div>
      <div className="flex-item">
        <h2>Contact</h2>
      </div>
      <div className="flex-item">
        <h2>Blog</h2>
      </div>
    </div>
  )
}

module.exports = Header;
