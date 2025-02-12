import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  imports: [ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tsi-2024.2-poo-av2';
}
