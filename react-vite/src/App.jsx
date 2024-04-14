import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // Optional for styling

console.log("API endpoint:", '/api/data'); // Log the endpoint

function App() {
  const [serverData, setServerData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/data');
        setServerData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <div className="App">
      {serverData ? (
        <p>Data from server: {serverData.message}</p>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default App;
