import React, { Component } from 'react'
import { FormGroup } from 'react-bootstrap'

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

  handleChange(event) {
    console.log('event.target.value', event.target.name, event.target.value)
    var obj = {};
    obj[event.target.name] = event.target.value;
    this.setState(obj, () => {console.log('new state: ', this.state)});
  }

  handleClickInserFish() {
    this.doSomething()
  }

  doSomething() {
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