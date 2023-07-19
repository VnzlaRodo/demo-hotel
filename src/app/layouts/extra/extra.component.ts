import { Component,ViewEncapsulation, ViewChild, OnInit } from '@angular/core';

import * as AOS from 'aos';

import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper";
import { ServicesService } from 'src/app/services/services.service';
import { TypeService } from 'src/app/models/typeservice';

// install Swiper modules
SwiperCore.use([EffectFade, Navigation, Pagination]);

@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExtraComponent implements OnInit {

  dataService: TypeService[] = [];
  formInfo: TypeService = {"id": "0", "ico": "", "name": "", "description": "", "images": "", "price": 0, "show": 0, "status": false };

  constructor( private services: ServicesService) {

              services.getServices()
              .subscribe( resp => {

                this.dataService = resp;
                console.log(this.dataService);
              } );
   }

  ngOnInit(): void {
    AOS.init();
  }

  showInfo(data:TypeService){
    this.formInfo = data;
  }

  submit(){
    this.formInfo = {"id": "0", "ico": "", "name": "", "description": "", "images": "", "price": 0, "show": 0, "status": false };
  }

}

