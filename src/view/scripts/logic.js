const botonCalcular = document.getElementById('boton-calcular')
const botonOrdenar = document.getElementById('boton-ordenar')

botonCalcular.addEventListener('click', async (event) => {
  event.preventDefault()
  const respuesta = await obtenerRespuestaCalcular()
  desplegarResultado(respuesta)
})

botonOrdenar.addEventListener('click', async (event) => {
  event.preventDefault()
  const respuesta = await obtenerRespuestaOrdenar()
  desplegarResultado(respuesta)
})

async function obtenerRespuestaCalcular () {
  const entrada = obtenerEntrada()
  const respuesta = await fetch('http://localhost:4000/api/calcular', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: entrada
  })
  return respuesta.json()
}

async function obtenerRespuestaOrdenar () {
  const entrada = obtenerEntrada()
  const respuesta = await fetch('http://localhost:4000/api/ordenar', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: entrada
  })
  const data = await respuesta.json()
  return data
}

function obtenerEntrada () {
  const profesoresAgendas = document.getElementById('POST-agenda').value
  const entrada = JSON.stringify({ entrada: profesoresAgendas })
  return entrada
}

function desplegarResultado (data) {
  const elementosYaCreados = verificarElementosYaCreados()
  if (elementosYaCreados) {
    const textAreaSalida = document.getElementById('salida')
    textAreaSalida.value = data
    return
  }
  const division = document.createElement('hr')
  division.classList.add('linea-redondeada')
  division.id = 'division'
  const resultadoLabel = document.createElement('h2')
  resultadoLabel.innerText = 'Resultados'
  resultadoLabel.classList.add('titulo-resultados')
  const textAreaSalida = document.createElement('textarea')
  textAreaSalida.id = 'salida'
  textAreaSalida.cols = 60
  textAreaSalida.rows = 7
  textAreaSalida.value = data.toString()
  document.body.appendChild(division)
  document.body.appendChild(resultadoLabel)
  document.body.appendChild(textAreaSalida)
}

function verificarElementosYaCreados () {
  const division = document.getElementById('division')
  return division !== null
}
