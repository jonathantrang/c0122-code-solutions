import React from 'react';

class AppDrawer extends React.Component {


  render() {
    return (
      <>
        <div className="active">
          <i className="fas fa-bars"></i>
        </div>
        <div className="background-picture">
        </div>
        <>
          <div className="menu hidden">
            <h1>Task Master</h1>
            <h2>Home</h2>
            <h2>Today's Task</h2>
            <h2>Upcoming Tasks</h2>
            <h2>Task Leaderboard</h2>
          </div>
          <div className="overlay hidden"></div>
        </>
      </>
    )
  }
}

export default AppDrawer;
