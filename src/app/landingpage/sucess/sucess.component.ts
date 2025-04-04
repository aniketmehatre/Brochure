import { Component } from '@angular/core';

@Component({
  selector: 'app-sucess',
  templateUrl: './sucess.component.html',
  styleUrls: ['./sucess.component.css']
})
export class SucessComponent {

  images: string[] = [
    'assets/placeimg/img1.jpeg',
    'assets/placeimg/img2.jpeg',
    'assets/placeimg/img3.jpeg',
    'assets/placeimg/img4.jpeg',
    'assets/placeimg/img5.jpeg',
    'assets/placeimg/img6.jpeg',
    'assets/placeimg/img7.jpeg',
    'assets/placeimg/img8.jpeg',
    'assets/placeimg/img11.jpeg',
    'assets/placeimg/img12.jpeg',
    // 'assets/placeimg/vid.mp4',

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
