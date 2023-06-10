import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

function DataTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
	  fetch('https://cors-anywhere.herokuapp.com/https://api.abiweb.com/customer/gowithgig/period-zero/vehicles/', {
	    method: 'GET',
	    headers: {
	      'Accept': 'application/json',
	      'Authorization': 'Basic am9yZGFuaEBob2xtZXNtb3RvcnMuY29tOmRlcmpVYkFtZnVrMg==',
	    },
	  })
	    .then(response => response.json())
	    .then(data => {
	      console.log(data.RESULT); // check the data.RESULT
	      setData(data.RESULT); // set the RESULT array to data state
	    })
	    .catch(error => console.error('Error:', error));
	}, []);
  
  return (
  	<div>
	    <h1 className="text-bold text-center">ABI Insurance Vehicle List</h1>
	    <Table striped bordered hover>
		<thead>
	        <tr>
			  <th>ID</th>
	          <th>MAKE</th>
	          <th>MODEL</th>
	          <th>PLATENUMBER</th>
			  <th>STATEREGISTERED</th>
			  <th>VIN</th>
			  <th>YEAR</th>
			  </tr>
	      </thead>
	      <tbody>
	        {data.map(item => (
	          <tr key={item.ID}>
	            <td>{item.ID}</td>
	            <td>{item.MAKE}</td>
	            <td>{item.MODEL}</td>  {/* If employers is an array .join(', ')*/}
				<td>{item.PLATENUMBER}</td>
				<td>{item.STATEREGISTERED}</td>
				<td>{item.VIN}</td>
				<td>{item.YEAR}</td>
				</tr>
	        ))}
	      </tbody>
	    </Table>
	</div>
  );
};

export default DataTable;
