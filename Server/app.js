// server/app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./DB-connection');
const contactRoutes = require('./routes/contatctRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS
app.use(cors());

// Connect to DB MongoDB
connectDB();

// Body parser middleware
app.use(bodyParser.json());

// Routes
app.use(contactRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
