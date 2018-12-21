import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
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
          <NavbarBrand className='' href="/pagefirst" className="mr-auto"><img src="../images/B2GreenLogosmall.png" alt="B2GREEN" width="20%" /></NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2 " />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem className='texte_link'>
                <NavLink href="/Diagnostic/">Diagnostic</NavLink>
              </NavItem>
              <NavItem className='texte_link'>
                <NavLink href="/conseil">Conseils</NavLink>
              </NavItem>
              <NavItem className='texte_link'>
                <NavLink href="/marketplace"> Market place</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
