const express = require('express');
const mongoose = require('mongoose');
const errorHandler = require('./middleware/errorHandler');
const dotenv = require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Successfully Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
}

connectToDatabase();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
