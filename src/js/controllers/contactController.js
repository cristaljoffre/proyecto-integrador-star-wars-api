function contactController() {
  var inputCorreo = $("#inputCorreo")
  inputCorreo.on("input", function () {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputCorreo.val())) {
      inputCorreo.addClass("is-valid")
      if (inputCorreo.hasClass("is-invalid")) {
        inputCorreo.removeClass("is-invalid")
      }
    } else {
      inputCorreo.addClass("is-invalid")
      if (inputCorreo.hasClass("is-valid")) {
        inputCorreo.removeClass("is-valid")
      }
    }
  })
  //validar input-nombre
  var inputNombre = $('#inputNombre')
  inputNombre.on('input', function () {
    if (inputNombre.val()) {
      inputNombre.addClass('is-valid')
      if (inputNombre.hasClass('is-invalid')) {
        inputNombre.removeClass('is-invalid')
      }
    } else {
      inputNombre.addClass('is-invalid')
      if (inputNombre.hasClass('is-valid')) {
        inputNombre.removeClass('is-valid')
      }
    }
  })
  //validar input-comentario
  var inputComentario = $("#inputComentario")
  inputComentario.on("input", function () {
    if (inputComentario.val()) {
      inputComentario.addClass("is-valid")
      if (inputComentario.hasClass("is-invalid")) {
        inputComentario.removeClass("is-invalid")
      }
    } else {
      inputComentario.addClass("is-invalid")
      if (inputComentario.hasClass("is-valid")) {
        inputComentario.removeClass("is-valid")
      }
    }
  })
  //validar boton-enviar
  var botonEnviar = $("#boton")
  var inputs = $("input")
  inputs.on("input", function () {
    if ((inputNombre.hasClass("is-valid")) && (inputCorreo.hasClass("is-valid"))) {
      botonEnviar.attr("disabled", false)
    } else {
      botonEnviar.attr("disabled", true)
    }
  })
}

export default contactController