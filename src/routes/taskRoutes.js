const express = require("express");
const router = express.Router();

router.get("/", (req ,res) =>{
 res.json({
        message: "Tüm görevleri getir."
    });
});

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