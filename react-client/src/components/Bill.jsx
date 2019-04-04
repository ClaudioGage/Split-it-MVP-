import React from 'react';



  function Bill ({ result, onSearchChange }) {
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


  

export default Bill;
