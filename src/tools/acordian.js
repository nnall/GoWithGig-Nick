import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
      activeEventKey: null, // Track the active event key
    };

    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.handleNavSelect = this.handleNavSelect.bind(this);
  }

  toggleSidebar() {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  }

  handleNavSelect(eventKey) {
    this.setState({ activeEventKey: eventKey }, () => {
      const { onComponentChange } = this.props;
      if (onComponentChange) {
        onComponentChange(eventKey);
      }
    });
  }

  renderNavItem(navItem) {
    if (navItem.children) {
      return (
        <NavDropdown title={navItem.category} id={`nav-dropdown-${navItem.category}`}>
          {navItem.children.map((child) => (
            <NavDropdown.Item
              key={child.key}
              eventKey={child.key}
              onSelect={this.handleNavSelect}
              className="text-light bg-dark"
            >
              {child.label}
            </NavDropdown.Item>
          ))}
        </NavDropdown>
      );
    } else {
      return (
        <Nav.Link key={navItem.key} eventKey={navItem.key} className="text-light">
          {navItem.label}
        </Nav.Link>
      );
    }
  }

  render() {
    const { isOpen, activeEventKey } = this.state;
    const { eventKeys, children } = this.props;

    return (
      <>
        {isOpen && (
          <div style={{ width: '10%', height: '1500px', background: '#f8f9fa' }} className="flex-column bg-dark text-light">
            <Nav defaultActiveKey="/home" className="flex-column bg-dark text-light" onSelect={this.handleNavSelect}>
              <Nav.Link href="/" className="text-light">Home</Nav.Link>
              {eventKeys.map((navItem) => this.renderNavItem(navItem))}
            </Nav>
          </div>
        )}
        <div style={{ flex: 1, overflow: 'auto' }}>
          {children && typeof children === 'function' && children(activeEventKey)}
        </div>
      </>
    );
  }
}

export default Sidebar;
