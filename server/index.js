const express = require("express");
const axios = require("axios");

const {addSong, getPlaylist} = require("./controllers/playlistController");

const app = express();

app.use(express.json());

app.post("/api/song", addSong);
app.get("/api/playlist", getPlaylist)

const PORT = 5050;

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));