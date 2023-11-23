const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

app.use(bodyParser.json());

e
const users = [];

app.post('/register', (req, res) => {
  const { username, email, password } = req.body;

 
  if (!username || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  
  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    return res.status(400).json({ error: 'Email is already registered' });
  }

  const newUser = { id: users.length + 1, username, email, password };
  users.push(newUser);

  res.status(201).json(newUser);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});