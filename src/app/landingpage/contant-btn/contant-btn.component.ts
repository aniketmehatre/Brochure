import { Component } from '@angular/core';

@Component({
  selector: 'app-contant-btn',
  templateUrl: './contant-btn.component.html',
  styleUrls: ['./contant-btn.component.css']
})
export class ContantBtnComponent {
  makeCall() {
    window.open('https://wa.me/919271114623?text=Hi%20I%20am%20interested%20in%20Data%20Science%20course', '')
  }


  applynow() {
    window.open('https://forms.gle/BYkaoYFe4JcneQ5Y9', '_blank');
  }
}
