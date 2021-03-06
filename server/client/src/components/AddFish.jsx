import React, { Component } from 'react'
import { FormGroup } from 'react-bootstrap'
import axios from 'axios';

export default class AddFish extends Component {
  constructor(props) {
    super(props)
    this.handleClickInserFish = this.handleClickInserFish.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      name: '',
      age: undefined,
      description: '',
      image: ''}
  }

  get() {
    axios.get('http://127.0.0.1:3000/')
    .then(response => console.log('response ====', response));
    // .catch(err => console.log('err ====='), err);
  }

  post(term) {
    axios.post('http://127.0.0.1:3000/api/fishPost', term)
      .then(response => console.log('response ====', term));
      // .catch(err => console.log('err ====='), err);
  }

  handleChange(event) {
    console.log('event.target.value', event.target.name, event.target.value)
    var obj = {};
    obj[event.target.name] = event.target.value;
    this.setState(obj, () => {console.log('new state: ', this.state)});
  }

  handleClickInserFish(e) {
    // this.sendToServer()his.sendToServer()
    // this.get()
    this.post(this.state)
  }

  sendToServer() {
    console.log(this.state);
  }

  render() {
    return(
      <div>
        <FormGroup>
          <label> Name: <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/></label>
          <label> Age: <input type="number" name="age" value={this.state.age} onChange={this.handleChange} /></label>
          <label> Description: <input type="text" name="description" value={this.state.description} onChange={this.handleChange} /></label>
          <label> ImageURL: <input type="text" name="image" value={this.state.image} onChange={this.handleChange} /></label>
          <input type="submit" value="Add" onClick={this.handleClickInserFish}/>
        </FormGroup>
      </div>
    )
  }
}

// export default this.state