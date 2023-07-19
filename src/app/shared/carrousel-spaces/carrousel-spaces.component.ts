import { Component, OnInit, ViewEncapsulation, ViewChild, Input } from '@angular/core';
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";
import { TypeHabitation } from 'src/app/models/typehabitation';

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);

@Component({
  selector: 'app-carrousel-spaces',
  templateUrl: './carrousel-spaces.component.html',
  styleUrls: ['./carrousel-spaces.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CarrouselSpacesComponent implements OnInit {

  thumbsSwiper: any;

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
