import { getItem } from '../../common/storage'
import spotify from '../spotify'

export default async () => {
  try {
    const responseHighlight = await spotify.get('/browse/featured-playlists', {
      headers: {
        Authorization: `Bearer ${getItem('token')}`
      }
    })

    return responseHighlight.data
  } catch (error) {
    console.log(error.message, 'getFeaturedPlaylists l13')
  }
}
