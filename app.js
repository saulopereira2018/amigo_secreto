// Array para armazenar os amigos
let amigos = [];

// Função para adicionar amigo à lista
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo === '') {
        // Se nome não foi inserido, exiba o alert
        alert('Por favor insira o nome do amigo secreto.');
        return;
    }

    if (!amigos.includes(nomeAmigo)) {
        amigos.push(nomeAmigo);
        atualizarLista();
        inputAmigo.value = ''; // Limpa o campo de texto
    } else {
        alert('Amigo já adicionado.');
    }
}