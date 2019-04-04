import React from 'react';

class Bill extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      bill: 0,
      people: 0
    };
  }
    handlePeople(e){
      this.setState({
        people: e.target.value
      })
    }
    handleBill(e){
      this.setState({
        bill: e.target.value
      })
    }
  
  render(){
    const { bill, people} = this.state;
    return(
      <div>
        <label>
          Total Bill:{' '}
          <input
            type="number"
            name="bill"
            value={bill}
            onChange={this.handleBill}
          />
        </label>
        <br />
        <label>
           Split in between #:{' '}
          <input
            type="number"
            name="people"
            value={people}
            onChange={this.handlePeople}
          />
        </label>
        <button>Split it</button>
      </div>
    )
  }
}

export default Bill;