const formElement = document.getElementById('form-agenda')

formElement.addEventListener('submit', (event) => {
  event.preventDefault()
  const agenda = document.getElementById('POST-agenda').value
  const agendaJson = JSON.stringify({ agenda })
  fetch('http://localhost:4000/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: agendaJson
  })
})
