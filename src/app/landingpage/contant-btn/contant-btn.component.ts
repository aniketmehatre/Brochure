import { Component } from '@angular/core';

@Component({
  selector: 'app-contant-btn',
  templateUrl: './contant-btn.component.html',
  styleUrls: ['./contant-btn.component.css']
})
export class ContantBtnComponent {

  makeCall() {
    const phonenumber = '+91-92711 14213';
    window.location.href = `tel:${phonenumber}`;
  }

  applynow() {
    window.open('https://forms.gle/BYkaoYFe4JcneQ5Y9', '_blank');
  }
}
