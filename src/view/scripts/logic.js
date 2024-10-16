const formElement = document.getElementById('form-agenda')

formElement.addEventListener('submit', async (event) => {
  event.preventDefault()
  const agenda = document.getElementById('POST-agenda').value
  const agendaJson = JSON.stringify({ agenda })
  const respuesta = await obtenerRespuestaBackend(agendaJson)
  desplegarResultado(respuesta)
})

async function obtenerRespuestaBackend (agenda) {
  const respuesta = await fetch('http://localhost:4000/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: agenda
  })
  return respuesta.json()
}

function desplegarResultado (data) {
  const division = document.createElement('hr')
  division.classList.add('linea-redondeada')
  const resultadoLabel = document.createElement('h2')
  resultadoLabel.innerText = 'Resultados'
  resultadoLabel.classList.add('titulo-resultados')
  const listaOrdenada = document.createElement('ol')
  data.forEach(item => {
    console.log(item.nombre)
    const profesorListItem = document.createElement('li')
    profesorListItem.innerText = item.nombre
    profesorListItem.classList.add('texto')
    listaOrdenada.appendChild(profesorListItem)
  })
  document.body.append(division)
  document.body.append(resultadoLabel)
  document.body.append(listaOrdenada)
}
