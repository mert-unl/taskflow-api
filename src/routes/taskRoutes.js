
app.get("/", (req ,res) =>{
 res.json({
        message: "Ana sayfa"
    });
});


app.get("/tasks", (req ,res) =>{
 res.json({
        message: "Tüm görevleri getir."
    });
});

app.post("/tasks", (req ,res) =>{
 res.json({
        message: "Yeni görev oluştur."
    });
});


//id
app.get("/tasks/:id", (req ,res) =>{
 res.json({
        message: "Belli id'li görevi getir."
    });
});

app.put("/tasks/:id", (req ,res) =>{
 res.json({
        message: "Belli id'li görevi güncelle."
    });
});

app.delete("/tasks/:id", (req ,res) =>{
 res.json({
        message: "Belli id'li görevi sil."
    });
});


