import { Component, OnInit, ViewEncapsulation, ViewChild, Input } from '@angular/core';
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";
import { TypeHabitation } from 'src/app/models/typehabitation';
import { Space } from 'src/app/models/space';
import { SupplierService } from 'src/app/services/supplier.service';

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
  url: string = '';

  @Input() data: Space = { "id": "0", "name": "", "description": "", "size": 0, "amount": 0, "images": [""], "status": 0 };

  constructor( private global: SupplierService ) { 
    this.url = global.urlGlobal;
  }

  ngOnInit(): void {
  }

}
