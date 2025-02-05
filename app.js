// El p rincipal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let inputNombre = document.getElementById("amigo");
    let nombre = inputNombre.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);
    inputNombre.value = "";
    actualizarLista();
}

function actualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");

    listaAmigos.innerHTML = "";

    amigos.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado");

    if (amigos.length === 0) {
        resultado.innerHTML = "<li>No hay amigos en la lista para sortear.</li>";
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}
