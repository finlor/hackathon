import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink } from "react-router-dom";
import './NavBar.scss'


export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>

        <Navbar className="navbar navbar-dark colorfond">
          <NavbarBrand className='' className="mr-auto"><NavLink to="/pagefirst"><img src="../images/B2GreenLogosmall.png" alt="B2GREEN" width="25%" /></NavLink></NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem className='texte_align_center'>
                <NavLink className='texte_link' to="/Diagnostic/">Diagnostic</NavLink>
              </NavItem>
              <NavItem className='texte_align_center' >
                <NavLink  className='texte_link' to="/conseil">Conseils</NavLink>
              </NavItem>
              <NavItem className='texte_align_center' >
                <NavLink  className='texte_link' to="/marketplace"> Market place</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
