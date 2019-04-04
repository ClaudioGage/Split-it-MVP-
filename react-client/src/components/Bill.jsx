import React from 'react';

class Bill extends React.PureComponent{
  render(){
    const {result, onSearchChange} = this.props;
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
}

export default Bill;
