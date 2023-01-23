import axios from 'axios'
import 'dotenv/config'

export default axios.create({
  baseURL: 'https://accounts.spotify.com/api/token',
  params: { grant_type: 'client_credentials' },
  timeout: 10000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization:
      'Basic ' +
      Buffer.from(
        process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET
      ).toString('base64')
  }
})
