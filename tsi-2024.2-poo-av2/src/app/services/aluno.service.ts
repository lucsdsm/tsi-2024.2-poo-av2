import { Injectable } from '@angular/core';
import { Aluno } from '../models/aluno';

@Injectable({
  providedIn: 'root', 
})
export class AlunoService {
  private alunos: Aluno[] = [
    new Aluno('João Silva', '202301', [8.5, 7.0]),
    new Aluno('Maria Souza', '202302', [9.5, 8.0]),
    new Aluno('Carlos Mendes', '202303', [6.0, 7.5]),
  ];

  listarAlunos(): Aluno[] {
    return this.alunos;
  }

  adicionarAluno(aluno: Aluno): void {
    this.alunos.push(aluno);
  }
}
