import { Component } from '@angular/core';

@Component({
  selector: 'app-career-support',
  templateUrl: './career-support.component.html',
  styleUrls: ['./career-support.component.css']
})
export class CareerSupportComponent {
  
  images: string[] = [
    'assets/companylogo/img1.png',
    'assets/companylogo/img2.png',
    'assets/companylogo/img3.png',
    'assets/companylogo/img4.png',
    'assets/companylogo/img5.png',
    'assets/companylogo/img6.png',
    'assets/companylogo/img7.png',
    'assets/companylogo/img8.png',
    'assets/companylogo/img9.png',
  ];

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];
}
