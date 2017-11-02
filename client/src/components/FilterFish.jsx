import React, { Component } from 'react'
import { FormGroup } from 'react-bootstrap'

export default class FilterFish extends Component {
  constructor(props) {
    super(props)
    this.handleClickFilterFish = this.handleClickFilterFish.bind(this)

    this.state = {
      fishes: [''],
      test: false
    }
  }

  handleClickFilterFish() {
    this.doSomething1()
  }

  doSomething1() {
    console.log('will filer soon');
  }

  render() {
    return (
      <div>
        <FormGroup>
          <label> Name: <input type="text" name="name" /></label>
          <label> Age: <input type="text" name="age" /></label>
          <input type="submit" value="Filter" onClick={this.handleClickFilterFish} />
        </FormGroup>
      </div>
    )
  }
}