import axios from "axios"

const api = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/character'
})

export default {
    all(){
        return api.get('/')
    }
}