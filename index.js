const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose=require('mongoose')
app.use(express.json());
try {
  mongoose.connect("mongodb://")
  console.log("connected")
} catch (error) {
console.log("not connected")  
}
app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

app.get('/api/newapi', (req, res) => {
  res.json({ message: 'New Hello, World!' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

