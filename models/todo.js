const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  description: {
    type: String,

  },
  responsible: {
    type: String,

  },
  priority: {
    type: String,

  },
  completed: {
    type: Boolean
  }
});

module.exports = User = mongoose.model('todo', TodoSchema);