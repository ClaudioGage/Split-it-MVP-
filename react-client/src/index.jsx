import React from 'react';
import ReactDOM from 'react-dom';
//import $ from 'jquery';
import Result from './components/Result.jsx';
import Bill from './components/Bill.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      result: ""
    }
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

  render () {
    return (
    <div>
      <center>
      <h1>Split it</h1>
      <div>
        <Bill />
        <h3><Result result={this.state.result} /></h3>
      </div>
      </center>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));