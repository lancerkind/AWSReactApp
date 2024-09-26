import React, { useState, useEffect } from 'react';

// Configuration
const apiEndpoint = "http://localhost:4000/stream-numbers"

const StreamingDataComponent = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiEndpoint);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const reader = response.body.getReader();
        const decoder = new TextDecoder('utf-8');

        while (true) {
          const { value, done } = await reader.read();
          if (done) break;
          
          const chunk = decoder.decode(value, { stream: true });
          const numbers = chunk.split('\n').filter(Boolean).map(Number);
          
          setData(prevData => [...prevData, ...numbers]);
        }

        setIsLoading(false);
      } catch (e) {
        setError(e.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Streamed Numbers:</h2>
      <ul>
        {data.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default StreamingDataComponent;