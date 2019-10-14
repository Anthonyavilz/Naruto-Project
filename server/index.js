const express = require('express');
const {createJutsu, getJutsu, removeJutsu} = require("./User Jutsu");

const app = express();

app.use(express.json());

app.post("/api/naruto", createJutsu);
app.get("/api/naruto", getJutsu);
app.delete("/api/naruto/:id", removeJutsu);


app.listen(8760, () => console.log('Running on port 8760'));