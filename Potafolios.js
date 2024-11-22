function enviarFormulario() {
    // Obtener los valores del formulario
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    // Validación básica de correo electrónico
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Por favor, introduce un correo electrónico válido.");
        return false; // Evitar el envío si el email es inválido
    }

    // Enviar los datos al servidor mediante fetch
    fetch('/guardarFormulario', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nombre, email, mensaje })
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert("¡Formulario enviado exitosamente!");
                document.getElementById("contactForm").reset(); // Limpiar el formulario
            } else {
                alert("Error al enviar el formulario: " + data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Hubo un problema al enviar los datos.");
        });

    return false; // Prevenir recarga de la página
}
