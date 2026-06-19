const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('🎉 Congratulations! Aapka Node.js app successfully deploy ho gaya!');
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
