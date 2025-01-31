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

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpar a lista antes de adicionar os novos amigos

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('É necessário pelo menos dois amigos para realizar o sorteio.');
        return;
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpar resultados anteriores

    // Realiza o sorteio de forma aleatória
    const indice = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indice];

    // Exibir o amigo sorteado
    const li = document.createElement('li');
    li.textContent = `O amigo secreto sorteado é: ${amigoSorteado}`;
    resultado.appendChild(li);
}
