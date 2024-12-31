require('dotenv').config();
const express = require('express');
const cors = require('cors'); // Import cors
const connectDB = require('./config/db');
const campaignRoutes = require('./routes/campaignRoutes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors()); // Enable CORS for all origins
app.use(express.json());

// Routes
app.use('/api/campaigns', campaignRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
