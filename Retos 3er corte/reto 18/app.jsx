
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;
mongoose.connect('your_database_url', { useNewUrlParser: true, useUnifiedTopology: true });

const Task = mongoose.model('Task', {
  title: String,
  description: String,
  createdBy: String, 
});

app.use(bodyParser.json());

app.post('/tasks', async (req, res) => {
  const { title, description, createdBy } = req.body;

  try {
    const newTask = await Task.create({ title, description, createdBy });
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: 'Error creating task' });
  }
});

app.put('/tasks/:id', async (req, res) => {
  const taskId = req.params.id;
  const { title, description, createdBy } = req.body;

  try {
    const task = await Task.findById(taskId);

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    if (task.createdBy !== createdBy) {
      return res.status(403).json({ error: 'Permission denied' });
    }

    const updatedTask = await Task.findByIdAndUpdate(taskId, { title, description }, { new: true });

    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: 'Error updating task' });
  }
});

app.delete('/tasks/:id', async (req, res) => {
  const taskId = req.params.id;
  const { createdBy } = req.body;

  try {
    const task = await Task.findById(taskId);

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    if (task.createdBy !== createdBy) {
      return res.status(403).json({ error: 'Permission denied' });
    }

    await Task.findByIdAndDelete(taskId);

    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting task' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
