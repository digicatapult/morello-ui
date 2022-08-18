import qs from 'qs'

export function executeBinary(name, params) {
  const queryString = qs.stringify(params)
  const url = `${procvess.env.MORELLO_API}/scenario/${name}`

  return fetch(`${url}?${queryString}`)
}
