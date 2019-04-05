import React from 'react';
import ReactDOM from 'react-dom';
import Bill from './components/Bill.jsx';
import Ppl from './components/People.jsx';
import Tip from './components/Tip.jsx';
import Refresh from './components/Refresh.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      result: "",
      people: "",
      individualTotal: "" 
    }
    this.onRefresh = this.onRefresh.bind(this);
    this.onTwenty = this.onTwenty.bind(this);
    this.onFifteen = this.onFifteen.bind(this);
    this.onTen = this.onTen.bind(this);
    this.handleIva = this.handleIva.bind(this);
    this.handleCalc = this.handleCalc.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onPeopleChange = this.onPeopleChange.bind(this);
  }
  onRefresh(e){
    e.preventDefault();
    window.location.reload();
  }
  onTen(e){
    e.preventDefault();
    const ivaIndividual = parseFloat((this.state.individualTotal)*1.10).toFixed(2);
    const ivaTotal = parseFloat((this.state.result)*1.10).toFixed(2);
    const {result, individualTotal} = this.state;
    this.setState({
      result: ivaTotal,
      individualTotal: ivaIndividual,
    });
  }
  onFifteen(e){
    e.preventDefault();
    const ivaIndividual = parseFloat((this.state.individualTotal)*1.15).toFixed(2);
    const ivaTotal = parseFloat((this.state.result)*1.15).toFixed(2);
    const {result, individualTotal} = this.state;
    this.setState({
      result: ivaTotal,
      individualTotal: ivaIndividual,
    });
  }
  onTwenty(e){
    e.preventDefault();
    const ivaIndividual = parseFloat((this.state.individualTotal)*1.20).toFixed(2);
    const ivaTotal = parseFloat((this.state.result)*1.20).toFixed(2);
    const {result, individualTotal} = this.state;
    this.setState({
      result: ivaTotal,
      individualTotal: ivaIndividual,
    });
  }
  handleIva(e){
    e.preventDefault();
    const ivaIndividual = parseFloat((this.state.individualTotal)*1.16).toFixed(2);
    const ivaTotal = parseFloat((this.state.result)*1.16).toFixed(2);
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

    const cuenta = parseFloat((this.state.result / this.state.people)).toFixed(2);

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
              onTwenty={this.onTwenty} onClick={this.onTwenty} 
            />
            <p>group total bill = {this.state.result}$</p>
            <p># of people spliting: {this.state.people}</p>
            <p>Your individual total is {this.state.individualTotal}$</p>
              <br />
              <br /> 
            <Refresh onRefresh ={this.onRefresh} onClick ={this.onRefresh} /> 
        </center>  
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));