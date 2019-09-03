function savedController() {
  function levantarLocalStorage(key) {
    if (localStorage.getItem(key)) {
      var listaPersonajes = JSON.parse(localStorage.getItem(key))
      return listaPersonajes
    }
  }
  function verPersonajes(personajes) {
    if (levantarLocalStorage("Personajes-Star-Wars")) {
      $(".tableThead").append("<tr>" + "<th>" + 0 + "</th>" + "<th>" + "Nombre" + "</th>" + "<th>" + "Género" + "</th>" + "<th>" + "Altura" + "</th>" + "<th>" + "Peso" + "</th>" + "<th>" + "Color de ojos" + "</th>" + "<th>" + "Eliminar" + "</th>" + "</tr>")
      for (var i = 0; i < personajes.length; i++) {
        $(".tableTbody").append("<tr>" + "<th>" + $("tr").length + "</th>" + "<th>" + personajes[i].name + "</th>" + "<th>" + personajes[i].gender + "</th>" + "<th>" + personajes[i].height + "</th>" + "<th>" + personajes[i].mass + "</th>" + "<th>" +personajes[i].eye_color + "</th>" + "<th>" + "<button type='button' id='" + ($("tr").length) + "' class='btn btn-danger botonEliminar'>" + "Eliminar" + "</button>" + "</th>" + "</tr>")
      }
    }
  }
  verPersonajes(levantarLocalStorage("Personajes-Star-Wars"))
  
  //Elimina el personaje del DOM y del localStorage
  $(".container").on("click", ".botonEliminar", function (event) {
    var capturarId = event.target.id
    for (var i = 0; i < levantarLocalStorage("Personajes-Star-Wars").length; i++) {
      if ($("tr")[capturarId].children[1].textContent == levantarLocalStorage("Personajes-Star-Wars")[i].name) {
        var x = levantarLocalStorage("Personajes-Star-Wars")
        x.splice(i, 1)
        localStorage.setItem("Personajes-Star-Wars", JSON.stringify(x))
        $("tr")[i + 1].remove()
        if (localStorage.getItem("Personajes-Star-Wars") == "[]") {
          localStorage.clear()
          break;
        }
        for (var ii = 0; ii < $("tr").length - 1; ii++) {
          $(".botonEliminar")[ii].id = ii + 1
        }
      }
    }
  })
}

export default savedController