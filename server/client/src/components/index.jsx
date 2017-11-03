import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import FilterFish from './FilterFish.jsx'
import FishList from './FishList.jsx'
import AddFish from './AddFish.jsx'
import AllFish from './AllFish.jsx'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fishArray: []
    };
  }

  handleFishListChange(fishes) {
    this.setState({
      fishArray: fishes 
    }, () => {
      console.log('index.jsx: ', this.state);
    });
  }

  render() {
    return(
      <div className="app-div">
        <div className="title">Show All Fish</div>
        <div><AllFish 
            handleClickInserFish={this.handleFishListChange.bind(this)}
          />
        </div>
        <div className="title">Add Fish</div>
        <div><AddFish /></div>
        <div className="title">Filter Fish</div>
        <div><FilterFish 
            handleClickInserFish={this.handleFishListChange.bind(this)}
          />
        </div>
        <div className="grid-top">
          <FishList 
            fishListToDisplay = {this.state}
          />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))