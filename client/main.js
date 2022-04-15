const animeContainer = document.querySelector('#anime-container')
const form = document.querySelector('form')

const baseURL = 'http://localhost:4000/api/anime'

const animeCallback = ({ data: anime }) => displayAnime(anime)
const errCallback = err => console.log(err.rsponse.data)

const getAllAnime = () => axios.get(baseURL).then(animeCallback).catch(errCallback)
const createAnime = body => axios.post(baseURL, body).then(animeCallback).catch(errCallback)
const deleteAnime = id => axios.delete(`${baseURL}/${id}`).then(animeCallback).catch(errCallback)
const updateAnime = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(animeCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let title = document.querySelector('#title')
    let rating = document.querySelector('#rating')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        title: title.value,
        rating: rating.value,
        imageURL: imageURL.value
    }
    createAnime(bodyObj)

    title.value = ''
    rating.checked = false
    imageURL.value = ''
}

function createAnimeCard(anime) {
    const animeCard = document.createElement('div')
    animeCard.classList.add('anime-card')

    animeCard.innerHTML = `<img alt='anime cover' src=${anime.imageURL} class = "anime-cover" />
    <p class="movie-title">${anime.title}</p>
    <div class="btns-container">
        <button onclick="updateAnime(${anime.id}, 'minus')">-</button>
        <p class="movie-rating">${anime.rating} stars</p>
        <button onclick="updateAnime(${anime.id}, 'plus')">+</button>
    </div>
    <button onclick="deleteAnime(${anime.id})">delete</button>`

    animeContainer.appendChild(animeCard)

}

function displayAnime(arr) {
    animeContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++){
        createAnimeCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getAllAnime()