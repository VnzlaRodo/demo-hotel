import { Component,ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormBuilder , Validators } from '@angular/forms';

import * as AOS from 'aos';

import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper";
import { ServicesService } from 'src/app/services/services.service';
import { TypeService } from 'src/app/models/typeservice';
import { ClientService } from 'src/app/services/client.service';

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
  myForm: FormGroup = this.fb.group({
    name    : ['', [Validators.required, Validators.minLength(4)]],
    id_service : ['', Validators.required],
    name_service : ['', Validators.required],
    email   : ['', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)  ] ],
    phone   : ['', [Validators.required, Validators.minLength(11)]],
    reason  : [''],
    details : ['', Validators.required]
  });

  message: string = "";

  constructor( private services: ServicesService, private fb: FormBuilder, private clientService: ClientService) {

              this.services.getServices()
              .subscribe( resp => {

                this.dataService = resp;
                
              } );
   }

  ngOnInit(): void {
    AOS.init();
  }

  showInfo(data:TypeService){
    this.formInfo = data;
  }

  validCap(campo: string){
    return this.myForm.controls[campo].errors && this.myForm.controls[campo].touched;
  }

  onSubmit(){
    if ( this.myForm.invalid ){
      this.myForm.markAsTouched();
      return
    }    

    this.formInfo = {"id": "0", "ico": "", "name": "", "description": "", "images": "", "price": 0, "show": 0, "status": false };
        
     this.clientService.setMessageServices(this.myForm.value).subscribe( resp => {
          console.log(resp);
     });
        
    
    this.myForm.reset();

    this.message = "mensaje enviado con exito";
  }

  closeMessage(){
    this.message = "";
  }

}

