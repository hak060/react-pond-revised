import React, { Component } from 'react'
import fishes from '../seed/fishdata.json'

import FishEntry from './FishEntry.jsx'

function FishList () {
  const title = 'Fresh Fishes'

  return (
    <div className="center">
    <div className="cohort-list-title">{title}, Number of Fish: {fishes.length}</div>
      <div className="grid">
      { fishes.map( (fish, index) => (<FishEntry key={fish.email} fish={fish} />)) }
      </div>
  </div>
  )
}


export default FishList