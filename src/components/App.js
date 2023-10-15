import React, { Component } from 'react';
import 'bootstrap';
import Button from 'react-bootstrap/Button';
import { Form, FormControl } from 'react-bootstrap';
import './App.css';

import AgeStats from './AgeStats';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newDate: '',
      birthday: '1985-08-05',
      showStats: false //->ternary expression
    };
  }

  changeBirthday() {
    console.log(this.state);
    this.setState({ birthday: this.state.newDate, showStats: true }); //important to set default state
  }

  render() {
    return (
      <div className='App'>
        <Form>
          <h1>Age Calculator</h1>
          <h3>Enter your date of birth</h3>
          <FormControl
            className='control'
            type='date'
            onChange={event => this.setState({ newDate: event.target.value })}
          />
          {''}
          <br />
          <Button type="button" class='btn btn-primary' onClick={() => this.changeBirthday()}>
            Calculate Age
          </Button>
          {this.state.showStats ? (
            <div className='fade age-stats'>
              <AgeStats date={this.state.birthday} />
            </div>
          ) : (
            <div />
          )}
        </Form>
      </div>
    );
  }
}

export default App;