export class Cliente {
    constructor(nome, email) {
        this.id = Date.now();
        this.nome = nome;
        this.email = email;
    }
}
