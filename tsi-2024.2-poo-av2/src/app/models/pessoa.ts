export class Pessoa {
    constructor(public nome: string, public matricula: string) {}
  
    exibirInformacoes(): string {
      return `Nome: ${this.nome}, Matrícula: ${this.matricula}`;
    }
  }
  