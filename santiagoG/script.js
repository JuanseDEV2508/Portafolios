function verContenido() {
    var content = document.getElementById("content");
    var button = document.getElementById("toggleButton");

    if (content.style.display === "none") {
        content.style.display = "block";
        button.textContent = "Ocultar contenido";
    } else {
        content.style.display = "none";
        button.textContent = "Mostrar contenido";
    }
}

function cambiarColor() {
    var colores = ["#554f4e", "#686565", "#878484", "#2c2b2b", "#29261e"];
    var colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorAleatorio;
}

const mostrarAlerta = () =>{(alert("¿Estas seguro de enviar los datos?"))}

//Formulario

document.addEventListener("DOMContentLoaded", () =>{
    const form = document.getElementById("formulario-contacto");
    const nombre = document.getElementById("nombre-contacto");
    const email = document.getElementById("email-contacto");
    const asunto = document.getElementById("asunto-contacto");
    const mensajeExi = document.getElementById("envio-mensaje");

    form.addEventListener("submit", (event)=>{
        event.preventDefault();

        //Bandera de comprobaciòn
        let isValido = true;
        if(nombre.checkValidity()){
            document.getElementById("nombreError").style.display = "block";
            nombre.setAttribute("aria-invalid, true")
            isValido = false;
        }else{
            document.getElementById("nombreError").style.display = "none";
            nombre.setAttribute("aria-invalid, false")
            isValido = false;
        }

        if(email.checkValidity()){
            document.getElementById("emailError").style.display = "block";
            email.setAttribute("aria-invalid, true")
            isValido = false;
        }else{
            document.getElementById("emailError").style.display = "none";
            email.setAttribute("aria-invalid, false")
            isValido = false;
        }

        if(asunto.checkValidity()){
            document.getElementById("asuntoError").style.display = "block";
            asunto.setAttribute("aria-invalid, true")
            isValido = false;
        }else{
            document.getElementById("asuntoError").style.display = "none";
            asunto.setAttribute("aria-invalid, false")
            isValido = false;
        }

        if(isValido){
            from.reset();
            mensajeExi.style.display = "block;"; //Muestra el mensaje
        }

    })


})