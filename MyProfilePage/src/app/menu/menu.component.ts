import { Component, Output, EventEmitter } from '@angular/core';
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

  @Output() menuToggled = new EventEmitter<boolean>();

  toggleMenu() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) this.wasOpened = true;
    else setTimeout(() => this.wasOpened = false, 400);

    this.menuToggled.emit(this.isOpen); // ⚡ importantíssimo
  }
}
