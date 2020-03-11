// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const PORT = 4000;

// app.use(cors());
// app.use(bodyParser.json());

// app.listen(PORT, function () {
//   console.log('Server is running on Port: ' + PORT)
// })

const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({
  extended: false
}));

// Define Routes
app.use('/todos', require('./routes/todo'));
// app.use('/api/auth', require('./routes/api/auth'));
// app.use('/api/profile', require('./routes/api/profile'));
// app.use('/api/posts', require('./routes/api/posts'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));