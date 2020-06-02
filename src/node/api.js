

export function getFilmsFromApiWithSearchedText (text) {

    const url = '../node/data.js'

    return fetch(url)

        .then((response) => response.json())

        .catch((error) => console.error(error))

}
