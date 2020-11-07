import React from 'react';
import { Link } from "react-router-dom";

class About extends React.Component {

    // How to create Link using JavaScript function
    gotohome = () => {
        this.props.history.push('/');    
    }

    render() {
        return (
            <div>
                <h1>About Page</h1>
                {/* <Link to="/">Go to Home Page</Link> */}
                
                {/* How to create Link using JavaScript function */}
                <button onClick={this.gotohome}>Go to Home Page</button>
            </div>
            
        )
    }
}

export default About;