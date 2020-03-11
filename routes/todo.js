const express = require('express');
const router = express.Router();


const Todo = require('../models/todo');



router.post('/add', (req, res) => {

  let todo = new Todo(req.body);
  todo.save()
    .then(todo => {
      res.status(200).json({
        'todo': 'todo added successfully'
      });
    })
    .catch(err => {
      res.status(400).send('Adding new todo failed');
    });
});
router.post('/update/:id', (req, res) => {

  Todo.findById(req.params.id, (err, todo) => {
    if (!todo)
      res.status(404).send('Data is not found');
    else
      todo.description = req.body.description;
    todo.responsible = req.body.responsible;
    todo.priority = req.body.priority;
    todo.completed = req.body.completed;

    todo.save().then(todo => {
        res.json('Todo updated');
      })
      .catch(err => {
        res.status(400).send("Update not possible");
      });
  });
});



router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find().populate('todo');

    res.json(todos)


  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});



router.get('/:id', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    // Check for ObjectId format and post
    if (!todo) {
      return res.status(404).json({
        msg: 'Todo not found'
      });
    }

    res.json(todo);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({
        msg: 'Todo not found'
      });
    }
    res.status(500).send('Server Error');
  }
});



module.exports = router;