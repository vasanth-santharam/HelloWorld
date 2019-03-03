import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
class Footer extends React.Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        console.log(this);
        console.log(new  Date().toLocaleString());
    }
  
    state = {
        curTime: null,
    }
    render() {
        setInterval(function(){this.setState({curTime: new  Date().toLocaleString()});}.bind(this), 1000);
       return (
        <div>
        <Navbar expand="lg" variant="dark" bg="primary" fixed="bottom" > 
        {this.state.curTime}
        </Navbar>

        </div>    
       )
    }
 }
 export default Footer;