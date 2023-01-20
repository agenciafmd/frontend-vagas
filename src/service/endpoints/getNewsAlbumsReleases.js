import { getItem } from '../../common/storage'
import spotify from '../spotify'

export default async () => {
  try {
    const response = await spotify.get('/browse/new-releases', {
      params: { limit: 4 },
      headers: {
        Authorization: `Bearer ${getItem('token')}`
      }
    })

    return response.data
  } catch (error) {
    console.log(error.message, 'getNewsAlbumsReleases l14')
  }
}
