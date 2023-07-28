import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Habitation } from 'src/app/models/habitation';
import { TypeHabitation } from 'src/app/models/typehabitation';
import { ClientService } from 'src/app/services/client.service';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-habitation',
  templateUrl: './habitation.component.html',
  styleUrls: ['./habitation.component.scss']
})
export class HabitationComponent implements OnInit {

  typeHabitation: TypeHabitation[] = [];
  habitations_available: Habitation[] = [];
  typeSelect: TypeHabitation = { "id": "", "name": "", "description": "", "price": 0, "status": 0, "images": [] };
  habitationsSelect: Habitation[] = [];
  checks: any = { checkin: "", checkout: ""};
  previusImage : string = "";

  formLodging: FormGroup = this.fb.group({
    tipoIdentidad: ['', Validators.required],
    cedula:        ['', [Validators.required, Validators.pattern(/^-?(0|[0-9]\d*)?$/), Validators.minLength(7)]],    
    name:          ['', [Validators.required, Validators.minLength(3)]],
    lastname:      ['', [Validators.required, Validators.minLength(4)]],
    phone:         ['', [Validators.required, Validators.pattern(/^-?(0|[0-9]\d*)?$/), Validators.minLength(11)]],
    email:         ['', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)  ] ],
    address:       [''],
    avatar:        [''],
    adults:        ['', Validators.required],
    children:      [''],
    checkin:       [this.clientService.checks.checkin, Validators.required],
    checkout:      [this.clientService.checks.checkout, Validators.required]

  });
  
  constructor( private services: ServicesService, private clientService: ClientService, private fb: FormBuilder, private sanitizer: DomSanitizer ) { 
              this.services.getTypeHabitation()
                            .subscribe( (resp:any) => {

                              this.typeHabitation = resp;                             
                              this.typeSelect = resp[0];
                            });

              this.habitations_available = this.clientService.habitations_available;
              this.checks = clientService.checks;
              console.log("checks",this.checks);
  }

  ngOnInit(): void {
  }

  onTypeSelect(type:any){
    this.typeSelect = type;
    this.habitationsSelect = this.habitations_available.filter( resp => {
        return resp.id_type_habitation == this.typeSelect.id;
    })    
    
  }

  validCap(campo: string){
    return this.formLodging.controls[campo].errors && this.formLodging.controls[campo].touched;
  }

  capAvatar(event:any){
    const fileCap = event.target.files[0];
    this.extraerBase64(fileCap).then( (image:any) => {
      this.previusImage = image.base;
      console.log(image.base);
    })
    console.log(event.target.files);
  }

  //Estraer Base64
  extraerBase64 = async ($event: any ) => new Promise( (resolve):any => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };
    } catch (e) {
      return null;
    }
  });

  onSubmitLodging(){
    
    this.clientService.setApplicationLodging(this.formLodging.value);
    this.formLodging.reset();
  }
  

}