let playlist = [
    {
        artist: "Billy Joel",
        song: "Piano Man",
        album: "Piano Men"
    }
];

let id = 1;
module.exports = {
    addSong: (req, res) => {
        //should supply artist, song, album
        const {artist, song, album} = req.body;
        let songObj = {
            artist,
            album,
            song,
            id
        }
        // let songObj = {
        //     ...req.body,
        //     id
        // }
        playlist.push(songObj);
        id++;
        res.status(200).json(playlist);
    },
    getPlaylist: (req, res) => {
        res.status(200).json(playlist);
    }
}