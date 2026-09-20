let taskData = require("../data/taskData");

const getAllTasks = (req, res) => {
  res.json({
    task: taskData,
    message: `Tüm görevler getirildi, toplam görev adedi ${taskData.length}`,
  });
};

const createTask = (req, res) => {
  const taskInfo = req.body;
  const id = Math.max(...taskData.map((task) => task.id)) + 1;

  taskInfo.id = id;
  taskData.push(taskInfo);

  res.json({
    task: taskInfo,
    message: "Yeni görev başarıyla oluşturuldu.",
  });
};

const deleteAllTasks = (req, res) => {
  taskData = [];
  res.json({
    task: [],
    message: "Tüm görevler silindi",
  });
};

//id
const getTask = (req, res) => {
  const id = req.params.id;
  const task = taskData.find((task) => task.id === Number(id));

  res.json({
    task: task,
    message: `Görev ${id} getirildi`,
  });
};

const updateTask = (req, res) => {
  const id = req.params.id;
  const task = taskData.find((task) => task.id === Number(id));
  const taskInfo = req.body;

  task.title = taskInfo.title;
  task.desc = taskInfo.desc;
  task.priority = taskInfo.priority;
  task.assignee = taskInfo.assignee;
  task.completed = taskInfo.completed;

  res.json({
    task: task,
    message: `Görev ${id} güncellendi`,
  });
};

const deleteTask = (req, res) => {
  const id = req.params.id;
  const task = taskData.find((task) => task.id === Number(id));
  taskData = taskData.filter((task) => task.id !== Number(id));

  res.json({
    task: task,
    message: `Görev ${id} silindi`,
  });
};

module.exports = {
  getAllTasks,
  createTask,
  deleteAllTasks,
  getTask,
  updateTask,
  deleteTask,
};
