const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('🚀 AUTOMATIC DEPLOYMENT WORKING! Version 2.0');
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
// Test change
// Test change
// Auto-deploy test
// Final test
// Test error details
// Auto-deploy test - Sun Jun 21 11:05:45 IST 2026
