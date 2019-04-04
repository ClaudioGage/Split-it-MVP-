import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      result: "",
      people: "",
      individualTotal: "" 
    }
    this.handleCalc = this.handleCalc.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onPeopleChange = this.onPeopleChange.bind(this);
  }

  onSearchChange  (event)  {
    this.setState({ result: event.target.value })
  }
  onPeopleChange  (event) {
    this.setState({ people: event.target.value })
  }
  
  handleCalc(e) {
    e.preventDefault();

    const cuenta = parseFloat(this.state.result / this.state.people);

    const {individualTotal} = this.state;
    this.setState({
      individualTotal: cuenta,
    });
  }
 

  render() {
    return (
      <div className="App">
        <center>
          <h1>Split it</h1>
            <Superhero onSearchChange={this.onSearchChange} />
            < Ppl onPeopleChange={this.onPeopleChange}/>
            <button onClick={this.handleCalc}>calculate</button>
        
            <p>group total {this.state.result}</p>
            <p>people total {this.state.people}</p>
            <p>Your individual total is {this.state.individualTotal}</p>
        </center>  
      </div>
    );
  }
}

const Superhero = ({ result, onSearchChange }) => {
  return (
    <div >
      <input
        type="search"
        placeholder="Bill total"
        onChange={onSearchChange}
      />
    </div>
  );
}
const Ppl = ({ searchfield, onPeopleChange }) => {
  return (
    <div >
      <input
        type="search"
        placeholder="Amount of people"
        onChange={onPeopleChange}
      />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('app'));