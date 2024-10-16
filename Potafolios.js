function enviarFormulario() {
    var nombre = document.getElementById("nombre").value;

    // Ocultar el formulario y mostrar el mensaje de agradecimiento
    document.getElementById("contactForm").style.display = "none";
    document.getElementById("nombreUsuario").textContent = nombre; // Poner el nombre del usuario
    document.getElementById("mensajeGracias").style.display = "block"; // Mostrar el mensaje de agradecimiento

    return false; // Prevenir que la página se recargue
}