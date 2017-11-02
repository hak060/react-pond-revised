import React, { Component } from 'react'

function FishEntry (props) {
  return (
    <div className="fish-list-entry">
      <div className="fish-photo"><img src={props.fish.image} /></div>
      <div className="fish-name">{props.fish.name}</div>
      <div className="fish-description">{props.fish.description}</div>
  </div>
  )
}

export default FishEntry