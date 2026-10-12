const express = require("express");
const taskController = require("../controllers/taskControllers");

const router = express.Router();


//get gelince gidip taskcontrollerden çağıracak
router.get("/", taskController.getAllTasks);

router.post("/", taskController.createTask);

router.delete("/",taskController.deleteAllTasks);

//gelişmiş özellikler
router.get("/search", taskController.searchTasks);
router.get("/assignee/:assignee", taskController.getTasksByAssignee);


//id
router.get("/:id",taskController.getTask)

router.put("/:id", taskController.updateTask);

router.delete("/:id", taskController.deleteTask);




module.exports = router;