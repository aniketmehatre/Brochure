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
    const phonenumber = '+919271114213';
    window.location.href = `tel:${phonenumber}`;
  }
  makeCall1() {
    const phonenumbera = '+919271114209';
    window.location.href = `tel:${phonenumbera}`;
  }
  makeCall2() {
    const phonenumberb = '+919271114620';
    window.location.href = `tel:${phonenumberb}`;
  }
  openlink() {
    window.open('https://campus.unipune.ac.in/ccep/login.aspx', '_blank');
  }
}
