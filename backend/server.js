const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to My Backend Server!');
});

app.get('/api/user', (req, res) => {
  res.json({ name: "Chriztal", email: "chriztal@example.com" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});