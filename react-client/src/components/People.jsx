import React from 'react';

function People ({ searchfield, onPeopleChange }){
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

export default People;