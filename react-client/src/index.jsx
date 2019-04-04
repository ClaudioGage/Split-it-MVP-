import React from 'react';
import ReactDOM from 'react-dom';
import Result from './components/Result.jsx';
import Bill from './components/Bill.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      result: "121212"
    };
    //this.division = this.division.bind(this);
  }
/*
  componentDidMount() {
    $.ajax({
      url: '/items', 
      success: (data) => {
        this.setState({
          items: data
        })
      },
  import React from 'react';
import ReactDOM from 'react-dom';
//import $ from 'jquery';
import Result from './components/Result.jsx';
import Bill from './components/Bill.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      result: "121212"
    };
    //this.division = this.division.bind(this);
  }
/*
  componentDidMount() {
    $.ajax({
      url: '/items', 
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
    Component
    Component
  }
  */
/*
 division(bill, people) {
  let { result } = this.state;
  const newItem = {
    bill,
    people,
  };
  const calculation = newItem.bill / newItem.people;
  if(newItem){
    console.log(calculation);
    return calculation;
  }
 }
 */

  render () {
    return (
    <div>
      <center>
        <h1>Split it</h1>
        <div>
          <Bill  />
          <h3><Result result={this.state.result} />
          </h3>
        </div>
      </center>
    </div>)
  }
}



ReactDOM.render(<App />, document.getElementById('app'));