import { Component } from '@angular/core';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MenuComponent],
  template: `
    <app-menu></app-menu>
  `,
})
export class AppComponent { }
