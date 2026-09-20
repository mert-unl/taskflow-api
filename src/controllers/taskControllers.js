const getAllTasks = (req, res) => {
    res.json({
        message: "Controller get all tasks"
    });
};


module.exports = {
    getAllTasks
};