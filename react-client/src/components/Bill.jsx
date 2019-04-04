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