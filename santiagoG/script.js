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
