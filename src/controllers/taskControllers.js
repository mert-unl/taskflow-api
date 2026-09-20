const getAllTasks = (req, res) => {
    res.json({
        message: "Tüm tasklar getirildi."
    });
};

const createTask =  (req ,res) =>{
 res.json({
        message: "Yeni görev oluştur."
    });
};


//id
const getTask =  (req ,res) =>{
 res.json({
        message: "Task getirildi"
    });
};

const updateTask =  (req ,res) =>{
 res.json({
        message: "Task güncellendi"
    });
};

const deleteTask =  (req ,res) =>{
 res.json({
        message: "Task silindi"
    });
};

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask

};