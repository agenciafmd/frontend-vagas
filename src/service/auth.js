import axios from 'axios'

let client_id = '7871a081c3674d96add590eeba1af5fa'
let client_secret = '02f7008ed4fe417c9cdb7121995571bd'

export default axios.create({
  baseURL: 'https://accounts.spotify.com/api/token',
  params: { grant_type: 'client_credentials' },
  timeout: 10000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization:
      'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64')
  }
})
