import { Component, OnInit ,ViewChild} from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DragScrollComponent } from 'ngx-drag-scroll';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  slides = [
    {'image':"https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg"}, 
  {'image': 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/9.jpg'},
  {'image': 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/7.jpg'},
   {'image': 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/1.jpg'},
   {'image': 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/4.jpg'}
  ];

  

  imageObject = [{
    image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
    thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
    title: 'Hummingbirds are amazing creatures'
}, {
    image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/9.jpg',
    thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/9.jpg'
}, {
    image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/4.jpg',
    thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/4.jpg',
    title: 'Example with title.'
},{
    image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/7.jpg',
    thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/7.jpg',
    title: 'Hummingbirds are amazing creatures'
}, {
    image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/1.jpg',
    thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/1.jpg'
}, {
    image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/2.jpg',
    thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/2.jpg',
    title: 'Example two with title.'
}];

}
