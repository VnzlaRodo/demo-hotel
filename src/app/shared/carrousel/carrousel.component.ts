import { Component, OnInit, Input, ViewEncapsulation, ViewChild } from "@angular/core";
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { TypeHabitation } from "src/app/models/typehabitation";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CarrouselComponent implements OnInit {

  @Input() data: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
