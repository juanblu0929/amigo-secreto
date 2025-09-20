// Array para almacenar los nombres
let amigos = [];

// Función para agregar nombres
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, escribe un nombre válido.");
        return;
    }
    amigos.push(nombre);
    input.value = ""; // limpiar input
    mostrarLista();
}
// Mostrar la lista de amigos en pantalla
function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debes ingresar al menos dos nombres para sortear.");
        return;
    }

    const indice = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indice];

    const resultado = document.getElementById("resultado");
    resultado.textContent = `🎁 El amigo secreto es: ${amigoSecreto}`;
}