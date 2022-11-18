const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const noteRoutes = require('./routes/noteRoutes');

dotenv.config({ path: '/.env' });

const app = express();
app.use(cors());
app.use(express.json());

/* const URI = process.env.MONGODB_URL;
mongoose.connect(
  URI,
  {
    useNewUrlParser: 'true',
    useUnifiedTopology: 'true',
  },
  (err) => {
    if (err) throw err;
    console.log('Connected to MongoDB');
  }
); */

app.use('/users', userRoutes);
app.use('/api/notes', noteRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});
