import React, { Component } from 'react'
import { FormGroup } from 'react-bootstrap'

export default class FilterFish extends Component {
  constructor(props) {
    super(props)
    this.handleClickFilterFish = this.handleClickFilterFish.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      name: '',
      age: undefined
    }
  }

  handleChange(event) {
    console.log('event.target.value', event.target.name, event.target.value)
    var obj = {};
    obj[event.target.name] = event.target.value;
    this.setState(obj, () => { console.log('new state: ', this.state) });
  }

  handleClickFilterFish() {
    this.doSomething()
  }

  doSomething() {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <FormGroup>
          <label> Name: <input type="text" name="name" value={this.state.name} onChange={this.handleChange} /></label>
          <label> Age: <input type="text" name="age" value={this.state.age} onChange={this.handleChange} /></label>
          <input type="submit" value="Filter" onClick={this.handleClickFilterFish} />
        </FormGroup>
      </div>
    )
  }
}