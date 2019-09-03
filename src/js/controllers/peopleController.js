function peopleController() {
  function getData(url, callback) {
    $.ajax({
      url: url,
      method: "GET"
    })
      .done(function (info) {
        callback(info)
      })
      .fail(function (error) {
        callback(error)
      })
  }
  //Agregar los personajes en la tabla
  function people(info) {
    resultados.push(info.results)
    for (var i = 0; i < info.results.length; i++) {
      $(".personajesTable").append("<tr>" + "<th>" + $("tr").length + "</th>" + "<th>" + info.results[i].name + "</th>" + "<th>" + info.results[i].gender + "</th>" + "<th>" + info.results[i].height + "</th>" + "<th>" + info.results[i].mass + "</th>" + "<th>" + info.results[i].eye_color + "</th>" + "<th>" + "<button type='button' id='" + ($("tr").length) + "' class='btn btn-success botonGuardar'>" + "Guardar" + "</button>" + "</th>" + "</tr>")
    }
  }
  function guardarEnLocalStorage(key, array) {
    if (true) {
      var personajesLista = !(JSON.parse(localStorage.getItem("Personajes-Star-Wars"))) ? personajesLista = [] : personajesLista = JSON.parse(localStorage.getItem("Personajes-Star-Wars"))
      personajesLista.push(array)
      var personajesJson = JSON.stringify(personajesLista)
      localStorage.setItem(key, personajesJson)
    }
  }
  function levantarLocalStorage(key) {
    if (localStorage.getItem(key)) {
      var listaPersonajes = JSON.parse(localStorage.getItem(key))
      return listaPersonajes
    }
  }
  var resultados = []
  //Evento en el boton-ver-más
  $(".botonVer").on("click", function (event) {
    var vez = event.target.id
    if (vez <= 8) {
      var numeroId = (Number(vez) + 1)
      var baseUrl = "https://swapi.co/api/people/?page=" + numeroId
      $(".botonVer")[0].id = numeroId
      getData(baseUrl, people)
      if (vez == 8) {
        $(".botonVer").attr("disabled", true)
      }
    }
  })
  //Evento en el boton-guardar
  $("#main").on("click", ".botonGuardar", function (event) {
    var capturarId = event.target.id
    var guardarPersonaje = {
      name: $("tr")[capturarId].children[1].textContent,
      gender: $("tr")[capturarId].children[2].textContent,
      height: $("tr")[capturarId].children[3].textContent,
      mass: $("tr")[capturarId].children[4].textContent,
      eye_color: $("tr")[capturarId].children[5].textContent
    }
    $("#" + capturarId).attr("disabled", true)
    //Guarda los personajes sin repetidos
    if (levantarLocalStorage("Personajes-Star-Wars")) {
      for (var i = 0; i < (levantarLocalStorage("Personajes-Star-Wars").length); i++) {
        if (!(levantarLocalStorage("Personajes-Star-Wars")[i].name == ($("tr")[capturarId].children[1].textContent))) {
          if (levantarLocalStorage("Personajes-Star-Wars")[i].name == ($("tr")[capturarId].children[1].textContent)) {
            return false
          } else if (levantarLocalStorage("Personajes-Star-Wars")[(levantarLocalStorage("Personajes-Star-Wars").length) - 1].name != ($("tr")[capturarId].children[1].textContent)) {
            if (i == (levantarLocalStorage("Personajes-Star-Wars").length - 1)) {
              guardarEnLocalStorage("Personajes-Star-Wars", guardarPersonaje)
            }
          } else {
            return false
          }
        } else {
          return false;
        }
      }
    } else {
      guardarEnLocalStorage("Personajes-Star-Wars", guardarPersonaje)
    }
  })
  getData("https://swapi.co/api/people/?page=1", people)
}

export default peopleController