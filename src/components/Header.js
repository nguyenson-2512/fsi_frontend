import React,  { Fragment, Component } from 'react';
import '../App.css'
import image from '../assets/huong.jpg'
import meraki from '../assets/meraki.png'



import "../fontawesome-free/css/all.min.css";
import {
	Switch,
	Route,
	Link
  } from "react-router-dom";


import {
	ListGroup,
	ListGroupItem,
	UncontrolledTooltip,
	Nav,
	NavItem,
	NavLink,
	Button,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu
  } from 'reactstrap';
export default class Header extends Component {

    render() {
        return(
			<div className="navbar">
			<ul className="navbar-nav">
			<li className="nav-item">
				<img src={meraki} alt="ATPro logo" className="logo" />
				<span className="brand">Meraki</span>
			</li>
			</ul>
			<ul className="navbar-nav nav-right">
			<li className="nav-item avt-wrapper">
			<Fragment>
			<UncontrolledDropdown className="position-relative ml-2">
			  <DropdownToggle
				color="link"
				className="p-0 text-left d-flex align-items-center">
				<div className="d-block d-44 rounded-sm overflow-hidden">
				  <img src={image} className="img-fluid" alt="..." style={{height: '40px',width: '40px'}}  />
				</div>
			  </DropdownToggle>
			  <DropdownMenu right className="dropdown-menu-lg overflow-hidden p-0">
				<ListGroup flush className="text-left bg-transparent">
				  <ListGroupItem className="rounded-top">
					<Nav pills className="nav-neutral-primary flex-column">
					  <NavItem >
					  
						
						<NavLink href="#/" onClick={e => e.preventDefault()}>
						<Link to="/app/profile" style={{ color: 'inherit', textDecoration: 'inherit' }}>
						  Profile
						</Link>
						  </NavLink>
					
						
					  </NavItem>
					  <NavItem componentClass='span'>
						<NavLink href="#/" onClick={e => e.preventDefault()}>
						<Link to="/app/aboutUs" style={{ color: 'inherit', textDecoration: 'inherit' }}>

						  About us
						</Link>
						</NavLink>
					  </NavItem>
					  <NavItem componentClass='span'>
						<NavLink href="#/" onClick={e => e.preventDefault()}>
						  Logout
						</NavLink>
					  </NavItem>
					</Nav>
				  </ListGroupItem>
				</ListGroup>
			  </DropdownMenu>
			</UncontrolledDropdown>
		  </Fragment>
		  </li>
			</ul>
			


			</div>
        )
    }
}