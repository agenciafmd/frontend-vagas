import spotify from '../../src/service/spotify'

export default async function handler(req, res) {
  try {
    const response = await spotify.get('/browse/featured-playlists')
    return res.json(response.data)
  } catch (error) {
    console.log(error)
    return res.json(error.message)
  }
}
