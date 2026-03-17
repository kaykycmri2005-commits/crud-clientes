// Salvar no localStorage
export const salvarDados = (chave, dados) => {
    localStorage.setItem(chave, JSON.stringify(dados));
};

// Buscar dados
export const obterDados = (chave) => {
    return JSON.parse(localStorage.getItem(chave)) || [];
};

// Remover item por ID (função pura)
export const removerPorId = (lista, id) => {
    return lista.filter(item => item.id !== id);
};

// Encontrar cliente (find)
export const encontrarCliente = (lista, id) => {
    return lista.find(item => item.id === id);
};

// Exemplo com reduce (contar clientes)
export const contarClientes = (lista) => {
    return lista.reduce((total) => total + 1, 0);
};
