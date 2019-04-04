import React from 'react';
import ReactDOM from 'react-dom';
import Bill from './components/Bill.jsx';
import Ppl from './components/People.jsx';
import Tip from './components/Tip.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      result: "",
      people: "",
      individualTotal: "" 
    }
    this.onTwenty = this.onTwenty.bind(this);
    this.onFifteen = this.onFifteen.bind(this);
    this.onTen = this.onTen.bind(this);
    this.handleIva = this.handleIva.bind(this);
    this.handleCalc = this.handleCalc.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onPeopleChange = this.onPeopleChange.bind(this);
  }
  onTen(e){
    e.preventDefault();
    const ivaIndividual = parseFloat(this.state.individualTotal)*1.10;
    const ivaTotal = parseFloat(this.state.result)*1.10;
    const {result, individualTotal} = this.state;
    this.setState({
      result: ivaTotal,
      individualTotal: ivaIndividual,
    });
  }
  onFifteen(e){
    e.preventDefault();
    const ivaIndividual = parseFloat(this.state.individualTotal)*1.15;
    const ivaTotal = parseFloat(this.state.result)*1.15;
    const {result, individualTotal} = this.state;
    this.setState({
      result: ivaTotal,
      individualTotal: ivaIndividual,
    });
  }

  onTwenty(e){
    e.preventDefault();
    const ivaIndividual = parseFloat(this.state.individualTotal)*1.20;
    const ivaTotal = parseFloat(this.state.result)*1.20;
    const {result, individualTotal} = this.state;
    this.setState({
      result: ivaTotal,
      individualTotal: ivaIndividual,
    });
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

  handleIva(e){
    e.preventDefault();
    const ivaIndividual = parseFloat(this.state.individualTotal)*1.16;
    const ivaTotal = parseFloat(this.state.result)*1.16;
    const {result, individualTotal} = this.state;
    this.setState({
      result: ivaTotal,
      individualTotal: ivaIndividual,
    });


  }
 

  render() {
    return (
      <div className="App">
        <center>
          <h1>Split it</h1>
            <Bill 
            onSearchChange={this.onSearchChange} 
            />

            < Ppl 
            onPeopleChange={this.onPeopleChange}
            />

            <button 
            onClick={this.handleCalc}>
            calculate
            </button>

              <br/>

            <button 
            onClick={this.handleIva}>
            include IVA
            </button>
            <Tip 
            onTen={this.onTen} onClick={this.onTen}
            onFifteen={this.onFifteen} onClick={this.onFifteen}
            onTen={this.onTwenty} onClick={this.onTwenty} 
            />
            <p>group total bill = {this.state.result}$</p>
            <p># of people spliting: {this.state.people}</p>
            <p>Your individual total is {this.state.individualTotal}$</p>
        </center>  
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));