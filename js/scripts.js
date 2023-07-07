const datos = {
    nombre: "",
    email: "",
    mensaje: "",
};

const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");
const formulario = document.querySelector(".formulario");

nombre.addEventListener("input", leertexto);
email.addEventListener("input", leertexto);
mensaje.addEventListener("input", leertexto);

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    console.log("Enviando Formulario");
});

function leertexto(e) {
    datos[e.target.id] = e.target.value;

    console.log(datos);
}
