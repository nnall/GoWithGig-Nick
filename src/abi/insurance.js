import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

function DataTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
	  fetch('https://cors-anywhere.herokuapp.com/https://api.abiweb.com/customer/gowithgig/period-zero/renters/', {
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
	    <h1 className="text-bold text-center">ABI Insurance Account List</h1>
	    <Table striped bordered hover>
		<thead>
	        <tr>
			  <th>ID</th>
	          <th>First Name</th>
	          <th>Last Name</th>
	          <th>LICENSESTATE</th>
			  </tr>
	      </thead>
	      <tbody>
	        {data.map(item => (
	          <tr key={item.ID}>
	            <td>{item.ID}</td>
	            <td>{item.FIRSTNAME}</td>
	            <td>{item.LASTNAME}</td>  {/* If employers is an array .join(', ')*/}
				<td>{item.LICENSESTATE}</td>
				</tr>
	        ))}
	      </tbody>
	    </Table>
	</div>
  );
};

export default DataTable;
