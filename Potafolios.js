function enviarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;

    // Validación adicional (por ejemplo, formato de correo electrónico)
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Por favor, introduce un correo electrónico válido.");
        return false; // No enviar el formulario si hay error
    }

    // Ocultar el formulario y mostrar el mensaje de agradecimiento
    document.getElementById("contactForm").style.display = "none";
    document.getElementById("nombreUsuario").textContent = nombre; // Poner el nombre del usuario
    document.getElementById("mensajeGracias").style.display = "block"; // Mostrar el mensaje de agradecimiento

    return false; // Prevenir que la página se recargue
}
