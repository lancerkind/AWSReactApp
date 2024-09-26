const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors());

app.get('/stream-numbers', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Transfer-Encoding', 'chunked');

  let count = 0;
  
  const streamNumbers = () => {
    if (count < 1000) {  // Stream 100 numbers
      res.write(count.toString() + '\n');
      count++;
      setTimeout(streamNumbers, 1000);  // Send a number every 100ms
    } else {
      res.end();
    }
  };

  streamNumbers();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});