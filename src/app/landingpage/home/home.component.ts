import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  applynow() {
    window.open('https://forms.gle/BYkaoYFe4JcneQ5Y9', '_blank');
  }
}
