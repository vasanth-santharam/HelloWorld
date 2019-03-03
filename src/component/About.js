import React from 'react';
import { Link } from 'react-router-dom';
import { Button} from 'react-bootstrap';
var pathToRegexp= require('path-to-regexp');
const PATH = "/about/:id";
const path = pathToRegexp.compile(PATH);

class About extends React.Component {
    render() {
        const { match } = this.props;
        console.log(match.path);
        console.log(match.params);
       return (
          <div>            
             <h1>About...{match.params.id}</h1>
             <Link to="/">
                <Button>Go to home</Button>
            </Link>
            <Link to={path({ id: 1 })}>
                <Button>Go to about/1</Button>
            </Link>
          </div>
       )
    }
 }
 export default About;
 