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

/*
import React from 'react';

const ListItem = (props) => (
  <div>
    { props.item.description }
  </div>
)

export default ListItem;
*/