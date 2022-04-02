import React from 'react';

class AppDrawer extends React.Component {


  render() {
    return (
      <div>
        <div className="hidden">
          <i className="fas fa-bars"></i>
        </div>
        <div className="menu active">
          <h1>Menu</h1>
          <h2>About</h2>
          <h2>Get Started</h2>
          <h2>Sign In</h2>
        </div>
        <div className="overlay active"></div>
      </div>
    )
  }
}

export default AppDrawer;
