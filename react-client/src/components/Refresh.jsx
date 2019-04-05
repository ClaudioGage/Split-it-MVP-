import React from 'react';


class Refresh extends React.Component {
    render(){
        const {result, people, individualTotal, onRefresh} = this.props
        return(
            <div>
                <button href ='/' onClick={onRefresh}>
                NEW SPLIT
                </button>
            </div>
        );
    }
}

export default Refresh;