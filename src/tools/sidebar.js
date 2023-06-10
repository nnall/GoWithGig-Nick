import React from 'react';
import { Nav, Button, Breadcrumb } from 'react-bootstrap';
import CloseButton from 'react-bootstrap/CloseButton';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Accordion from 'react-bootstrap/Accordion';
import Stack from 'react-bootstrap/Stack';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
    };
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  toggleSidebar() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    const { isOpen } = this.state;

    return (
      <div style={{width: isOpen ? '10%' : '0', height: '100vh', position: 'fixed'}} className="flex-column bg-dark">
        <CloseButton onClick={this.toggleSidebar} className="bg-light" />
        {isOpen && (
			<Stack gap={3}>
          <Nav defaultActiveKey="/" className="flex-column bg-dark text-light">
		  <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Admin</Breadcrumb.Item>
		  </Breadcrumb>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link eventKey="link-1">Option 1</Nav.Link>
            <Nav.Link eventKey="link-2">Option 2</Nav.Link>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
				<Accordion className="bg-dark" flush>
			      <Accordion.Item eventKey="0">
			        <Accordion.Header>Accordion Item #1</Accordion.Header>
			        <Accordion.Body>
			          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
			          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
			          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
			          aliquip ex ea commodo consequat. Duis aute irure dolor in
			          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
			          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
			          culpa qui officia deserunt mollit anim id est laborum.
			        </Accordion.Body>
			      </Accordion.Item>
			      <Accordion.Item eventKey="1">
			        <Accordion.Header>Accordion Item #2</Accordion.Header>
			        <Accordion.Body>
			          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
			          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
			          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
			          aliquip ex ea commodo consequat. Duis aute irure dolor in
			          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
			          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
			          culpa qui officia deserunt mollit anim id est laborum.
			        </Accordion.Body>
			      </Accordion.Item>
				  </Accordion>
          </Nav>
		  </Stack>
        )}
      </div>
    );
  }
}

export default Sidebar;
