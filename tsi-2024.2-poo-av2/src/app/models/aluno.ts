import { Pessoa } from './pessoa';

export class Aluno extends Pessoa {
  constructor(
    nome: string,
    matricula: string,
    public notas: number[] = []
  ) {
    super(nome, matricula);
  }

  calcularMedia(): number {
    const peso1 = 0.4;
    const peso2 = 0.6;

    const media = (this.notas[0] * peso1) + (this.notas[1] * peso2);
    return parseFloat(media.toFixed(2));
  }

  override exibirInformacoes(): string {
    return `${super.exibirInformacoes()}, Média: ${this.calcularMedia().toFixed(2)}`;
  }
}