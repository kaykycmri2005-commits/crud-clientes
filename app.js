import { Cliente } from './classes.js';
import { salvarDados, obterDados, removerPorId } from './utils.js';

const form = document.getElementById('form');
const listaClientes = document.getElementById('lista');

let clientes = obterDados('clientes');

// Renderizar lista
const renderizar = () => {
    listaClientes.innerHTML = '';

    clientes.map(cliente => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${cliente.nome} - ${cliente.email}
            <button data-id="${cliente.id}">Excluir</button>
        `;
        listaClientes.appendChild(li);
    });
};

// Evento de cadastro
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    // validação simples
    if (!nome || !email) {
        alert('Preencha todos os campos!');
        return;
    }

    const novoCliente = new Cliente(nome, email);
    clientes.push(novoCliente);

    salvarDados('clientes', clientes);
    renderizar();
    form.reset();
});

// Evento de exclusão (delegação)
listaClientes.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const id = Number(e.target.dataset.id);

        clientes = removerPorId(clientes, id);
        salvarDados('clientes', clientes);
        renderizar();
    }
});

// Inicialização
renderizar();
