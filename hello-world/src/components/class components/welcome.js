import React from 'react';

class Welcome extends React.Component {
    render() {
        return (
            <div>
                <h1>Class component Welcome to {this.props.name}, {this.props.rank}</h1>
                </div>
        )
    }
}

export default Welcome;