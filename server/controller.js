let anime = require('./db.json')
let globalID = 6

module.exports = {
    getAnime: (req, res) => {
        res.status(200).send(anime)
    },
    deleteAnime: (req, res) => {
        const {id} = req.params;
        let index = anime.findIndex(elem => elem.id === +req.params.id)
        anime.splice(index, 1)
        res.status(200).send(anime);
    },
    createAnime: (req, res) => {
        const {id, title, rating, imageURL} = req.body;
        let newAnime = {
            id: globalID,
            title,
            rating,
            imageURL
        }
        anime.push(newAnime);
        globalID++;
        res.status(200).send(anime);
    },
    updateAnime: (req, res) => {
        const {id} = rq.params;
        const {type} = req.body;
        let index = anime.findIndex(elem => elem.id === +id)

        if(type === `minus`){
            anime[index].rating -=1;
            res.status(200).send(anime)
        }else if(type === `plus`){
            anime[index].rating += 1
            res.status(200).send(anime)
        } else {
            res.status(400).send(`Something went wrong`)
        }
    }
}