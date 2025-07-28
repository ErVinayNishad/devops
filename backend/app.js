const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const todoRoutes = require("./routers/todoRouters");
dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/todos', todoRoutes);

// Connect DB and start server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB Connected');
    app.listen(process.env.PORT, () =>
      console.log(`Server running on port ${process.env.PORT}`)
    );
  })
  .catch(err => console.log(err));
