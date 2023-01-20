import { getItem } from '../../common/storage'
import spotify from '../spotify'

export default async () => {
  try {
    const response = await spotify.get('/recommendations', {
      params: { limit: 3, seed_genres: 'hip-hop' },
      headers: {
        Authorization: `Bearer ${getItem('token')}`
      }
    })

    return response.data
  } catch (error) {
    console.log(error.message, 'getNewsAlbumsReleases l14')
  }
}
