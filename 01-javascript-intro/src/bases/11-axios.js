import axios from "axios"

const apiKey = "YGMIZGtLa1IaqQtLCW2TMXeFAdgj4s6P"
// https://api.giphy.com/v1/gifs/random?api_key=${apiKey}

const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey
    }
})

export default giphyApi

// giphyApi.get('/random').
//     then( resp => {
//         const {data} = resp.data
//         const {url} = data.images.original
//         const img = document.createElement("img")
//         img.src = url
//         document.body.append(img)
//     })
