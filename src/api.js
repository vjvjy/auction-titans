import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://official-joke-api.appspot.com/random_joke',
    headers: {
        'content-type':'application/json',
        "access-control-allow-origin": "*",
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Methods': '*',
    }
});

export default {
    getJokes: () =>
    instance({
        'method':'GET',
        'url':'/query',
    })
}