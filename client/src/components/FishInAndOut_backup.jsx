import React, { Component } from 'react'
import { Button, ButtonToolbar } from 'react-bootstrap'
import { Form, TextToolbar } from 'react-bootstrap-form'

export default class FishInAndOut extends Component {
  constructor(props) {
    super(props)
    this.handleClickInserFish = this.handleClickInserFish.bind(this)
    this.handleClickGetFish = this.handleClickGetFish.bind(this)

    this.state = {
      fishes: [''],
      test: false
    }
  }

  handleClickInserFish() {
    this.doSomething1()
  }

  handleClickGetFish() {
    this.doSomgThing2()
  }

  doSomgThing2() {
    console.log('test');
  }

  doSomething1() {
    console.log('test');
  }

  render() {
    return(
      <div className="button">
        <ButtonToolbar>
          <Button bsStyle="success" onClick={this.handleClickInserFish}>Insert Fish</Button>
          <Button bsStyle="success" onClick={this.handleClickGetFish}>Get Fish</Button>
        </ButtonToolbar>
        {/* <TextToolbar>

        </TextToolbar> */}
      </div>
    )
  }
}