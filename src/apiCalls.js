export const fetchImages = () => {
  return fetch('https://hp-api.herokuapp.com/api/characters')
  .then(response => checkError(response))
  .catch(error => console.log(error))
}

const checkError = (response) => {
  if (!response.ok) {
    throw new Error(
      "Sorry, something went wrong with the server."
    )
  } else {
    return response.json()
  }
}