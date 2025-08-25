import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  openEmail() {
    const mailtoUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=seuemail@dominio.com';
    window.open(mailtoUrl, '_blank');
  }
}
