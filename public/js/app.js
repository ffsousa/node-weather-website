console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

const messsageOne = document.querySelector('#message-1')
const messsageTwo = document.querySelector('#message-2')


weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const loc = search.value
  messsageOne.textContent = 'Loading..'
  fetch('/weather?address=' + loc).then((response) => {
  response.json().then((data) => {
    console.log(data)
    if (data.error) {
       return messsageOne.textContent = data.error
    }
    messsageOne.textContent = data.location
    messsageTwo.textContent = data.forecast
  })
})
})