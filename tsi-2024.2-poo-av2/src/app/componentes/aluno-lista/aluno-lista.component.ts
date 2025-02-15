import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { AlunoService } from '../../services/aluno.service';
import { Aluno } from '../../models/aluno';

import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-aluno-lista',
  templateUrl: './aluno-lista.component.html',
  styleUrls: ['./aluno-lista.component.css'],
  imports: [CommonModule, TableModule],
})
export class AlunoListaComponent implements OnInit {
  alunos: Aluno[] = [];

  constructor(private alunoService: AlunoService) {}

  ngOnInit(): void {
    this.carregarAlunos();
  }

  carregarAlunos(): void {
    this.alunos = this.alunoService.listarAlunos();
    console.log('Lista de alunos carregada:', this.alunos);
  }
}
