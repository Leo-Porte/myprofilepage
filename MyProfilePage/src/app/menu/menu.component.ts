import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgIf],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  isOpen = false;
  wasOpened = false;

  toggleMenu() {
    if (!this.isOpen) {
      this.isOpen = true;
      this.wasOpened = true;
    } else {
      this.isOpen = false;
      // remover do DOM depois da animação de fechar
      setTimeout(() => this.wasOpened = false, 400); // 400ms = duração da animação
    }
  }
}
