import qs from 'qs'
import { DSBD_API_URL } from './env'

export function executeBinary(name, params) {
  const queryString = qs.stringify(params)
  const url = `${DSBD_API_URL}/scenario/${name}`

  return fetch(`${url}?${queryString}`)
}
