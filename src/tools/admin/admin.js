import React from 'react';
import Sidebar from '../acordian';
import Gigs from '../../tools/gigs';
import Renters from '../../abi/insurance';
import Vehicles from '../../abi/vehicle';
import Create from '../../abi/create_ins';
import Rents from '../../abi/rentals';
import Ratings from '../../argyle/ratings';
import Argyle from '../../argyle/create_token';

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeEventKey: null,
    };
  }

  handleComponentChange = (activeEventKey) => {
    this.setState({ activeEventKey });
  };

  render() {
    const eventKeys = [
      {
        category: 'Argyle',
        children: [
      { key: 'ratings', label: 'Ratings' },
          { key: 'argyleTest', label: 'Argyle Test' },
          { key: 'gigs', label: 'Gigs' },
        ],
      },
      {
        category: 'ABI Insurance',
        children: [
      { key: 'renters', label: 'Renters' },
          { key: 'create', label: 'Create' },
          { key: 'rents', label: 'Rents' },
      { key: 'vehicles', label: 'Vehicles' },
        ],
      },
      {
        category: 'HQ Rental Software',
        children: [
          { key: 'ratings', label: 'Ratings' },
          { key: 'argyleTest', label: 'Argyle Test' },
        ],
      },
    ];

    return (
      <div style={{ display: 'flex' }}>
        <Sidebar eventKeys={eventKeys} onComponentChange={this.handleComponentChange} >
          {(activeEventKey) => {
            switch (activeEventKey) {
              case 'renters':
                return <Renters />;
              case 'gigs':
                return <Gigs />;
              case 'vehicles':
                return <Vehicles />;
              case 'create':
                return <Create />;
              case 'rents':
                return <Rents />;
              case 'ratings':
                return <Ratings />;
              case 'argyleTest':
                return <Argyle />;
              default:
                return null;
            }
          }}
        </Sidebar>
        {/* Render other components outside the sidebar */}
      </div>
    );
  }
}

export default ParentComponent;