import React, { useEffect, useState } from 'react';
import { Table, Modal } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

function DataTable() {
  const [data, setData] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const fullNameParam = searchParams.get('name');
  const [showModal, setShowModal] = useState(false);
  const [selectedAchievements, setSelectedAchievements] = useState([]);

  const handleEmployerClick = (achievements) => {
    setSelectedAchievements(achievements);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    fetch('https://api-sandbox.argyle.com/v2/ratings', {
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
  }, [fullNameParam]);

  // Calculate the average rating
  const averageRating = data.reduce((sum, item) => sum + parseFloat(item.rating), 0) / data.length;

  return (
    <div>
      <h1 className="text-bold text-center">
        {fullNameParam} Gig Ratings : Average Rating: {averageRating.toFixed(2)}
      </h1>
      <Table striped bordered hover>
        <thead>
          <tr className="text-bold text-center">
            <th>Acceptance Rate</th>
            <th>created_at</th>
            <th>employer</th>
            <th>id</th>
            <th>ontime_rate</th>
            <th>rating</th>
            <th>updated_at</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id} className="text-bold text-center">
              <td>{(item.acceptance_rate * 100).toFixed(0)}%</td>
              <td>{item.created_at}</td>
              <td className="text-primary">
                <div onClick={() => handleEmployerClick(item.achievements)} style={{ cursor: 'pointer' }}>
                  {item.employer}
                </div>
              </td>
              <td>{item.id}</td>
              <td>{(item.ontime_rate * 100).toFixed(0)}%</td>
              <td>{item.rating}</td>
              <td>{item.updated_at}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Achievements</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedAchievements.map((achievement, index) => (
            <div key={index}>
              <p>{achievement.description}</p>
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleCloseModal}>Close</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default DataTable;
