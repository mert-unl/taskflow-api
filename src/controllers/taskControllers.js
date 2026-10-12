let taskData = require("../data/taskData");


const getAllTasks = (req, res) => {
  let filteredTasks = taskData;

  const completed = req.query.completed;
  
  if (completed === "true") {
    filteredTasks = filteredTasks.filter(
      (task) => task.completed === true
    );
  } else if (completed === "false") {
    filteredTasks = filteredTasks.filter(
      (task) => task.completed === false
    );
  }
  
  
const priority = req.query.priority;

if (priority) {
  filteredTasks = filteredTasks.filter(
    (task) => task.priority === priority
  );
}


  res.json({
    task: filteredTasks,
    message: `Toplam ${filteredTasks.length} görev getirildi.`,
  });
};



const searchTasks = (req, res) => {
  const keyword = req.query.keyword;

  if (!keyword || !keyword.trim()) {
    return res.status(400).json({
      task: [],
      message: "Arama için keyword parametresi gereklidir.",
    });
  }

  const searchKeyword = keyword.toLowerCase().trim();

  const filteredTasks = taskData.filter((task) => {
    const title = (task.title || "").toLowerCase();
    const desc = (task.desc || "").toLowerCase();

    return (
      title.includes(searchKeyword) ||
      desc.includes(searchKeyword)
    );
  });

  res.json({
    task: filteredTasks,
    message: `${filteredTasks.length} görev bulundu.`,
  });
};


const getTasksByAssignee = (req, res) => {
  const assignee = req.params.assignee;

  const filteredTasks = taskData.filter(
    (task) =>
      (task.assignee || "").toLowerCase() ===
      assignee.toLowerCase()
  );

  res.json({
    task: filteredTasks,
    message: `${assignee} kullanıcısına ait ${filteredTasks.length} görev bulundu.`,
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
  searchTasks,
  getTasksByAssignee,
};
