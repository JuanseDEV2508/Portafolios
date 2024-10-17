function copiarEmail() {
    var email = document.getElementById("email").textContent;
    navigator.clipboard.writeText(email).then(function() {
        console.log('Correo copiado al portapapeles');
    }, function(err) {
        console.error('No se pudo copiar el correo', err);
    });
}