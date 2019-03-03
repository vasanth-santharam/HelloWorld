import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap';

import './App.css';

import Navbar11 from './Navbar/Navbar1';
import Footer from './Navbar/Footer';
import Home from './component/Home.js';
import About from './component/About';
import Contact from './component/Contact';
import Content from './component/Content';


import { Router, Route, Switch, Redirect } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';
var pathToRegexp= require('path-to-regexp');
const PATH = "/about/:id";
const path = pathToRegexp.compile(PATH);


const Abouts = ({ match }) => (
  <div>
    <Link to={`${match.url}`}>
      About homepage 
    </Link>
    <Route exact path={`${match.url}/:id`} component={About}/>
  </div>
) 

class App extends Component {
  constructor(props){
    super();
  }

  render() {
    return (
      <>
      <BrowserRouter>
        <div className = "App">
        <Navbar bg="dark" expand="lg" variant="dark" fixed="top" sticky="top">
          <Navbar.Brand href="#home">Navbar
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link ><Link to="/">Home</Link></Nav.Link>
              <Nav.Link ><Link to="/contact">Contact</Link></Nav.Link>
              <Nav.Link ><Link to="/content">content</Link></Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item ><Link to={path({ id: 1 })}>action/1</Link></NavDropdown.Item>
                <NavDropdown.Item ><Link to={path({ id: 2 })}>action/1</Link></NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar> 
       
          <hr/>
           <Route path='/' exact component={Home} />
           
            <Route path="/about" component={Abouts} />

            <Route path='/Content' exact strict render={()=>{
                return <Content/>;
            }}>
            </Route>  
            <Route path='/contact'  render={()=>{
                return <Contact/>;
            }}></Route>   
          {/* <Route exact path="/" component={Home} /> */}
          {/* <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/Content" component={Content} /> */}
          <Footer/>
        </div>
      </BrowserRouter>
      </>
    );
  }
}

export default App;
