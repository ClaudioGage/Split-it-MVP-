import React from 'react';


class Tip extends React.Component {
    render(){
        const {result, individualTotal, onTen, onFifteen, onTwenty} = this.props;
        return(
            <div >
                <p>
                    <button onClick={onTen}>
                        Add 10% Tip
                    </button>
                    <button onClick={onFifteen}>
                        Add 15% Tip
                    </button>
                    <button onClick={onTwenty}>
                        Add 20% Tip
                    </button>
                </p>
            </div>
        )
    }
}

export default Tip;