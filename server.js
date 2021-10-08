const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config()
const mongoose = require('mongoose')
const uri = process.env.URI
const PORT = process.env.PORT || 5000;

const authRoutes = require('./routes/authRoutes');
const dataRoutes = require('./routes/dataRoutes');

app.use(cors());
app.use(express.json());

//routes

app.use('/auth', authRoutes);
app.use('/data', dataRoutes);


mongoose.connect(
    uri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("Connected to database")
  );

app.listen(PORT, ()=> console.log("Listening on "+ PORT))