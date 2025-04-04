import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'brochure';


  applynow() {
    window.open('https://forms.gle/BYkaoYFe4JcneQ5Y9', '_blank');
  }

}

