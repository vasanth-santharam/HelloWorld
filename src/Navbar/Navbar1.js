import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap';
var pathToRegexp= require('path-to-regexp');
const PATH = "/about/:id";
const path = pathToRegexp.compile(PATH);

class Navbar1 extends React.Component {
  componentWillUpdate(){
    console.log("componentWillUpdate"+new  Date().toLocaleString());
}
componentDidMount(){
    console.log("componentDidMount");
}
componentDidCatch(){
    console.log("componentDidCatch");
}
componentWillReceiveProps(){
    console.log("componentWillReceiveProps");
}
shouldComponentUpdate(newProps,newState){
    return 1;
};
componentDidUpdate(){
    console.log("componentDidUpdate");
}
componentWillMount(){
    console.log("componentWillMount");
}
componentWillUnmount(){
    console.log("componentWillUnmount");
}    
    render() {
       return (
          
<Navbar bg="dark" expand="lg" variant="dark" fixed="top">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/" >Home</Nav.Link>
      <Nav.Link href="/Contact/" >Contact</Nav.Link>
      <Nav.Link href="/content/" >content</Nav.Link>
      <Nav.Link href="/ajax/" >ajax</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="action/1" to={path({ id: 1 })}>Action</NavDropdown.Item>
        <NavDropdown.Item href="action/2" to={path({ id: 1 })}>action/2</NavDropdown.Item>
        <NavDropdown.Item href="action/3" to={path({ id: 1 })}>action/3</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="action/4" to={path({ id: 1 })}>action/4</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>        
       )
    }
 }
 export default Navbar1;