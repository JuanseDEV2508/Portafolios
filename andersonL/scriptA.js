function copiarEmail() {
    var email = document.getElementById("email");
    email.select();
    document.execCommand("copy");
    alert("Correo copiado: " + email.value);
}
