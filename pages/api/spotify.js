import spotify from '../../src/service/spotify'

export default async function handler(req, res) {
  try {
    const response = await spotify.get('/recommendations', {
      params: { limit: 3, seed_genres: 'hip-hop' },
      headers: {
        Authorization: `Bearer BQBy-dOkXI8bFUGfCaZVaCt8e75RfpWUprETtdEfUGjef-7YXOdlRrZgavus64-pG0UvW_w6KWGK-n20m82TdMAS2rT6zoXdO6YRT6aT2f7jWr5l_Sg`
      }
    })
    return res.json(response.data)
  } catch (error) {
    console.log(error)
    return res.json(error.message)
  }
}
