import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

function DataTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api-sandbox.argyle.com/v2/identities', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('3f6086f9-b438-436e-bd7e-e5c4a280c1df:YMBnLR9VCr7yOsiL'),
      },
    })
    .then(response => response.json())
    .then(data => {
      console.log(data.results);
      console.log(Array.isArray(data.results)); // should print 'true' if data.results is an array
      setData(data.results);
    })
    .catch(error => console.error('Error:', error));
  }, []);
  
  return (
  	<div>
	    <h1 className="text-bold text-center">Argyle Account List</h1>
	    <Table striped bordered hover>
		<thead>
	        <tr>
			  <th>Profile Pic</th>
	          <th>Name</th>
	          <th>email</th>
	          <th>Employer</th>
			  <th>Base Pay</th>
			  <th>Hire Date</th>
			  <th>Account ID</th>
			  <th>User ID</th>
			  <th>Hire Date</th>
			  </tr>
	      </thead>
	      <tbody>
	        {data.map(item => (
	          <tr key={item.id}>
			    <td>
				<img src={item.picture_url} alt="Profile" style={{ width: '75px', height: '75px' }} />
				</td>
	            <td><a href={`/ratings?name=${encodeURIComponent(item.full_name)}`} rel="noopener noreferrer">
                  {item.full_name}
				  </a></td>
	            <td>{item.email}</td>
	            <td>{item.employer}</td>  {/* If employers is an array .join(', ')*/}
				<td>${item.base_pay.amount}</td>
				<td>{item.hire_date}</td>
				<td>{item.account}</td>
				<td>{item.id}</td>
				<td>{item.hire_date}</td>
				</tr>
	        ))}
	      </tbody>
	    </Table>
	</div>
  );
};

export default DataTable;
