import React from 'react';
import MenuBar from './MenuBar';
import HomeList from './HomeList';
import homecards from '../api/homecards';


class App extends React.Component{

  state = { homecards : [] };

  constructor () {
    super();
    this.getHomecards();
  }

  async getHomecards () {

    let data = await homecards.getInstance().getHomecards();
    data = await data.json();
    this.setState({homecards: data.homecards});
    console.log(data.homecards);
  }

  render () {
    return (
      <div className="container">
        <MenuBar />
        <HomeList data={this.state.homecards}/>
      </div>
    );
  }
}

export default App;
