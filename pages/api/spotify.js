import { getItem } from '../../src/common/storage'
import { authSpotify } from '../../src/service/auth'

export default async function handler(req, res) {
  try {
    const response = await authSpotify.post()
    getItem('token')
    return res.json(response.data)
  } catch (error) {
    console.log(error)
    return res.json(error)
  }
}
