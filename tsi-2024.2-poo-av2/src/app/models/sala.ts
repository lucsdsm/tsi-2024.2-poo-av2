import { Aluno } from './aluno';

export class Sala {
  constructor(public nome: string, public alunos: Aluno[] = []) {}

  adicionarAluno(aluno: Aluno): void {
    this.alunos.push(aluno);
  }

  listarAlunos(): Aluno[] {
    return this.alunos;
  }
}