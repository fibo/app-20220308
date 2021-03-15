function client({ method, url: endpoint, data, query = {} }) {
  const headers = {
    'Content-Type': 'application/json'
  }

  const params = { headers, method }

  if (typeof data !== 'undefined') {
    params.body = JSON.stringify(data)
  }

  const url = new URL(endpoint)

  for (const [key, value] of Object.entries(query)) {
    url.searchParams.append(key, value)
  }

  return fetch(url.toString(), params).then((response) => {
    if (response.ok) {
      return response.json()
    } else {
      // Redux actions need a serializable argument,
      // so the Promise is not rejected with an Error.
      //
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject({
        status: response.status,
        statusText: response.statusText
      })
    }
  })
}

export const get = (args) => client({ method: 'GET', ...args })
