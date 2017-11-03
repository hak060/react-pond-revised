import React, { Component } from 'react'
import { FormGroup } from 'react-bootstrap'
import axios from 'axios';

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

  get() {
    axios.get('http://127.0.0.1:3000/')
      .then(response => console.log('response ====', response));
    // .catch(err => console.log('err ====='), err);
  }

  post(term) {
    axios.post('http://127.0.0.1:3000/api/fishFilter', term)
      .then(response => {
        console.log('server response ====',response);
        this.setState(response.data, () => {
          console.log('filter post ===', response.data);
          this.props.handleClickInserFish(response.data);
        });
      });
    // .catch(err => console.log('err ====='), err);
  }

  handleChange(event) {
    console.log('event.target.value', event.target.name, event.target.value)
    var obj = {};
    obj[event.target.name] = event.target.value;
    this.setState(obj, () => { console.log('new state: ', this.state) });
  }

  handleClickFilterFish() {
    this.sendToServer()
    // this.get()
    this.post(this.state)
  }

  sendToServer() {
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

// export default this.state