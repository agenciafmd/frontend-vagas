import axios from 'axios'

let client_id = '7871a081c3674d96add590eeba1af5fa'
let client_secret = '02f7008ed4fe417c9cdb7121995571bd'

export default axios.create({
  baseURL: 'https://api.spotify.com/v1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Authorization:
      'Bearer BQBh6Cqp0BTv8xrKcBcLMB6hhbles8KFzF036vRN5kRUDJle4jArMHZMl2vjlJgfoGBiMYStafukOFPvsI1mblM0y97ovSGCRvHDxfTlyqK24ICMWUA'
  }
})
