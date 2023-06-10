import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

function DataTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
	  fetch('https://cors-anywhere.herokuapp.com/https://api.abiweb.com/customer/gowithgig/policy/ABI2023DEMO-4362/period-zero/rentals/', {
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
  
//"ID":"241","VEHICLE":"761","RENTER":"121","STARTTIME":"2023-05-31 18:00","ENDTIME":null,"TIMEZONE":"America\/New_York"
	
  return (
  	<div>
	    <h1 className="text-bold text-center">ABI Insurance Account List</h1>
	    <Table striped bordered hover>
		<thead>
	        <tr>
			  <th>ID</th>
	          <th>Vehicle</th>
	          <th>Renter</th>
	          <th>StartTime</th>
			  <th>EndTime</th>
			  </tr>
	      </thead>
	      <tbody>
	        {data.map(item => (
	          <tr key={item.ID}>
	            <td>{item.ID}</td>
	            <td>{item.VEHICLE}</td>
	            <td>{item.RENTER}</td>  {/* If employers is an array .join(', ')*/}
				<td>{item.STARTTIME}</td>
				<td>{item.ENDTIME}</td>
				</tr>
	        ))}
	      </tbody>
	    </Table>
	</div>
  );
};

export default DataTable;
