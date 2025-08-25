import { Component } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { NgIf } from '@angular/common'; // ⚡ importante

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MenuComponent, FooterComponent, NgIf],
  template: `
    <app-menu (menuToggled)="onMenuToggled($event)"></app-menu>
    <app-footer *ngIf="!menuOpen"></app-footer>
  `,
})
export class AppComponent {
  menuOpen = false;

  onMenuToggled(state: boolean) {
    this.menuOpen = state;
  }
}
