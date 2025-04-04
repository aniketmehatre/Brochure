import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  email: string = 'admissions1.unipune@gmail.com';

  makeemail() {
    window.location.href = `mailto:${this.email}`;
  }
  makeCall() {
    const phonenumber = '+91-92711 14213';
    window.location.href = `tel:${phonenumber}`;
  }
  makeCall1() {
    const phonenumbera = '+91 92711 14209';
    window.location.href = `tel:${phonenumbera}`;
  }
  makeCall2() {
    const phonenumberb = '+91-92711 14620';
    window.location.href = `tel:${phonenumberb}`;
  }
  openlink() {
    window.open('https://www.unipune.ac.in/', '_blank');
  }
}
