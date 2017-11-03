import React, { Component } from 'react'
import fishes from '../seed/fishdata.json'

import FishEntry from './FishEntry.jsx'

function FishList (props) {
  const title = 'Fresh Fishes'

  return (
    <div className="center">
    <div className="fish-list-title">{title}, Number of Fish: {fishes.length}</div>
      <div className="grid">
        {props.fishListToDisplay.fishArray.map( (fish, index) => (<FishEntry key={index} fish={fish} />)) }
      </div>
  </div>
  )
}


export default FishList

// { fishes.map((fish, index) => (<FishEntry key={fish.name} fish={fish} />)) }