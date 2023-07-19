import { Component, OnInit, ViewEncapsulation, ViewChild, Input } from '@angular/core';
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";
import { TypeHabitation } from 'src/app/models/typehabitation';

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);

@Component({
  selector: 'app-carrousel-habitation',
  templateUrl: './carrousel-habitation.component.html',
  styleUrls: ['./carrousel-habitation.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CarrouselHabitationComponent implements OnInit {

  thumbsSwiper: any;

  @Input()  data: TypeHabitation = { id: '', name: '', status: '', price: 0, imagenes: [''], description: ''}

  constructor() { }

  ngOnInit(): void {

    console.log(this.data);
  }

}
