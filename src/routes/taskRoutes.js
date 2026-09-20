const express = require("express");
const taskController = require("../controllers/taskController");

const router = express.Router();


//get gelince gidip taskcontrollerden çağıracak
router.get("/", taskController.getAllTasks);


router.post("/", (req ,res) =>{
 res.json({
        message: "Yeni görev oluştur."
    });
});


//id
router.get("/:id", (req ,res) =>{
 res.json({
        message: "Belli id'li görevi getir."
    });
});

router.put("/:id", (req ,res) =>{
 res.json({
        message: "Belli id'li görevi güncelle."
    });
});

router.delete("/:id", (req ,res) =>{
 res.json({
        message: "Belli id'li görevi sil."
    });
});

module.exports = router;