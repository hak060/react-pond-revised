import React, { Component } from 'react'
import { FormGroup } from 'react-bootstrap'

import axios from 'axios';
import FishEntry from './FishEntry.jsx'
import FishList from './FishList.jsx'

export default class AllFish extends Component {
  constructor(props) {
    super(props)
    this.handleClickAllFish = this.handleClickAllFish.bind(this)
    this.state = {}
  }

  get() {
    axios.get('http://127.0.0.1:3000/api/allFishes')
      .then(response => {
        console.log('response ====', response.data)
        this.setState(response.data, () => { 
          this.props.handleClickInserFish(response.data);
          console.log('new state: ', this.state) 
        });
      });
    // .catch(err => console.log('err ====='), err);
  }

  // post(term) {
  //   axios.post('http://127.0.0.1:3000/api/fishFilter', term)
  //     .then(response => console.log('response ====', term));
  //   // .catch(err => console.log('err ====='), err);
  // }

  handleClickAllFish() {
    this.sendToServer()
    this.get()
    // this.post(this.state)
  }

  sendToServer() {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <FormGroup>
          <input type="submit" value="ShowAll" onClick={this.handleClickAllFish} />
        </FormGroup>
      </div>
    )
  }
}