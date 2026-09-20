const taskData = require("../data/taskData");


const getAllTasks = (req, res) => {
     res.json(taskData); 
    };


const createTask =  (req ,res) =>{
 res.json({
        message: "Yeni görev oluştur."
    });
};


//id
const getTask =  (req ,res) =>{
    const id = req.params.id;

 res.json({
        message: `Task ${id} getirildi`
    });
};

const updateTask =  (req ,res) =>{
    const id = req.params.id;

 res.json({
        message: `Task ${id} güncellendi`
    });
};

const deleteTask =  (req ,res) =>{
    const id = req.params.id;

 res.json({
        message: `Task ${id} silindi`
    });
};

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask

};