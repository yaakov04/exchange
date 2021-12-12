const url = 'https://api.coincap.io/v2'

function getAssets() {
  return fetch(`${url}/assets?limit=20`, {
    mode: 'cors',
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  })
    .then((res) => res.json())
    .then((res) => res.data)
}

export default {
  getAssets,
}
