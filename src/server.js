const app = require("./app");
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Dikkat! Express ${PORT} portunda çalışıyor.`);
});