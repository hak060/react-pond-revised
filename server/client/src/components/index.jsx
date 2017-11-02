import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import FilterFish from './FilterFish.jsx'
import FishList from './FishList.jsx'
import AddFish from './AddFish.jsx'

function App() {
  // const title = 'fishes'

  return(
    <div className="app-div">
      <div className="title">Add Fish</div>
      <div><AddFish /></div>
      <div className="title">Filter Fish</div>
      <div className="grid-top"><FilterFish /></div>
      <FishList />
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('app'))