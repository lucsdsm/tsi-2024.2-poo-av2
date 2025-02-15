import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from "./componentes/header/header.component";
import { AlunoListaComponent } from "./componentes/aluno-lista/aluno-lista.component";

@Component({
  selector: 'app-root',
  imports: [ButtonModule, HeaderComponent, AlunoListaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tsi-2024.2-poo-av2';
}
