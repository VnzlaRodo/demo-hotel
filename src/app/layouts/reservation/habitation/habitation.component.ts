import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Habitation } from 'src/app/models/habitation';
import { TypeHabitation } from 'src/app/models/typehabitation';
import { ClientService } from 'src/app/services/client.service';
import { ServicesService } from 'src/app/services/services.service';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-habitation',
  templateUrl: './habitation.component.html',
  styleUrls: ['./habitation.component.scss']
})
export class HabitationComponent implements OnInit {

  url = "";
  typeHabitation: TypeHabitation[] = [];
  habitations_available: Habitation[] = [];
  typeSelect: TypeHabitation = { "id": "", "name": "", "description": "", "price": 0, "status": 0, "images": [] };
  habitationsSelect: Habitation[] = [];
  checks: any = { checkin: "", checkout: ""};
  previusImage : string = "";
  gImage = null;
  lodgingSelect = false;
  isClient = false;
  clientVerify = false;
  clientTemp = {
    id: "",
    name: "",
    lastname: "",
    phone: "",
    email: "",
    address: "",
    avatar: ""
  }

  formLodging: FormGroup = this.fb.group({
    tipoIdentidad: ['', Validators.required],
    cedula:        ['', [Validators.required, Validators.pattern(/^-?(0|[0-9]\d*)?$/), Validators.minLength(7)]],    
    name:          [this.clientTemp.name, [Validators.required, Validators.minLength(3)]],
    lastname:      [this.clientTemp.lastname, [Validators.required, Validators.minLength(4)]],
    phone:         [this.clientTemp.phone, [Validators.required, Validators.pattern(/^-?(0|[0-9]\d*)?$/), Validators.minLength(11)]],
    email:         [this.clientTemp.email, [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)  ] ],
    address:       [this.clientTemp.address],
    avatar:        null,
    adults:        ['', Validators.required],
    children:      [''],
    checkin:       [this.clientService.checks.checkin, Validators.required],
    checkout:      [this.clientService.checks.checkout, Validators.required]

  });
  
  constructor( private services: ServicesService, private clientService: ClientService, private fb: FormBuilder, private sanitizer: DomSanitizer, private global: SupplierService ) { 
              this.url = global.urlGlobal;
              this.services.getTypeHabitation()
                            .subscribe( (resp:any) => {

                              this.typeHabitation = resp;                             
                              this.typeSelect = resp[0];
                            });

              this.habitations_available = this.clientService.habitations_available;
              this.checks = clientService.checks;              
  }

  ngOnInit(): void {
  }

  checkClient(){
    var client = {
      "cedula": this.formLodging.value.tipoIdentidad + this.formLodging.value.cedula
    };   

    this.clientService.getClient(client).subscribe( (res:any) => {
              
        this.clientTemp.id = res.id;
        this.clientTemp.name = res.name;
        this.clientTemp.lastname = res.lastname;
        this.clientTemp.phone = res.phone;
        this.clientTemp.email = res.email;
        this.clientTemp.address = res.address;
        this.clientTemp.avatar = res.avatar;

        this.isClient = true;
        this.clientVerify = true;
       }, (error) => {
        //console.log("Error: ",error)
        this.isClient = true;        
       }
    );
    

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
      this.gImage = image.Blob;
    })
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
          Blob: $event,
          image,
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

    this.formLodging.value.avatar = this.gImage;
    
    if ( this.clientVerify ){
      this.clientService.setApplicationLodging(this.formLodging.value, this.clientTemp.id);
      this.lodgingSelect = true;
      this.formLodging.reset();
    } else {

      this.clientService.setApplicationLodging(this.formLodging.value, this.clientTemp.id);
      this.lodgingSelect = true;
      this.formLodging.reset();
    }
      
  }
  

}