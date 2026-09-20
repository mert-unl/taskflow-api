const taskData = require("../data/taskData");

const getAllTasks = (req, res) => {
  res.json({
    task: taskData,
    message: `Tüm görevler getirildi, toplam görev adedi ${taskData.length}`,
  });
};

const createTask = (req, res) => {
  const taskInfo = req.body;
  const id = taskData.length + 1;
  taskInfo.id = id;

  taskData.push(taskInfo);
  res.json({
    task: taskInfo,
    message: "Yeni görev oluştur.",
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
    task.completed = taskInfo.completed;

  res.json({
    task: task,
    message: `Görev ${id} güncellendi`,
  });
};

const deleteTask = (req, res) => {
  const id = req.params.id;
  const task = taskData.find((task) => task.id === Number(id));

  res.json({
    task: task,
    message: `Görev ${id} silindi`,
  });
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
