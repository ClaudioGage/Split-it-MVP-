import React from "react";
import ReactDOM from "react-dom";

/*
**********************************************************************************************************
index
*********************************************************************************************
import People from './components/People.jsx';
import Bill from './components/Bill.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      result: ""
    };
    //this.division = this.division.bind(this);
  }

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
  }const { bill, people } = this.state;
      this.setState({
        bill: '',
        people: '',
      });


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
 

  render () {
    return (
    <div>
      <center>
        <h1>Split it</h1>
        <div>
          <Bill  />
          <h3><People result={this.state.result} />
          </h3>
        </div>
      </center>
    </div>)
  }
}
**************************************************************************************************************** 
bill component
****************************************************************************************************************
import React from 'react';


class Bill extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      bill: "",
      people: "",
    };
    this.handleCalc = this.handleCalc.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleCalc(e){
      e.preventDefault();

      const cuenta = parseFloat(this.state.bill / this.state.people);
      console.log(cuenta);
      this.props.cuenta;
      console.log(this.props)

      const { bill, people } = this.state;
      this.setState({
        bill: '',
        people: '',
      });
    }
    handleSubmit(e){
      const { target } = e;
      const { name, value } = target;

      this.setState({
        [name]: value,
      });
    }
  
  render(){
    const { bill, people} = this.state;
    const {division} = this.props;
    return(
      <div>
        <label>
          Total Bill:{' '}
          <input
            type="number"
            name="bill"
            value={bill}
            onChange={this.handleSubmit}
          />
        </label>
        <br />
        <label>
           Split in between #:{' '}
          <input
            type="number"
            name="people"
            value={people}
            onChange={this.handleSubmit}
          />
        </label>
        <button onClick ={this.handleCalc} >Split it</button>
      </div>
    )
  }
}

export default Bill;
**************************************************************
People before result component
**************************************************************

import React from 'react';

class Result extends React.Component {


    render() {
        let {result} = this.props;
        return (
            <div className="result">
                <p> TOTAL AMOUNT PAIR PERSON {result}$</p>
            </div>
    )
    }
}


export default Result;

*/


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);