import React from 'react';

class People extends React.PureComponent{
  render(){
    const{serchfield, onPeopleChange} = this.props
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
}


export default People;