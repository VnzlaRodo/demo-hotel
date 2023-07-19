import { Component, OnInit, ViewEncapsulation, ViewChild, Input  } from '@angular/core';
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";
import { EventClient } from 'src/app/models/eventClient';

// install Swiper modules
SwiperCore.use([Pagination]);

@Component({
  selector: 'app-carrousel-event',
  templateUrl: './carrousel-event.component.html',
  styleUrls: ['./carrousel-event.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CarrouselEventComponent implements OnInit {

  @Input() events: EventClient[] = [];

  time = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
