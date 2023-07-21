import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder , Validators } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    name    : ['', [Validators.required, Validators.minLength(4)]],    
    email   : ['', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)  ] ],
    phone   : ['', [Validators.required, Validators.minLength(11)]],
    reason  : [''],
    details : ['', Validators.required]
  });

  constructor( private fb: FormBuilder, private clientService: ClientService) { }

  ngOnInit(): void {
  }

  validCap(campo: string){
    return this.myForm.controls[campo].errors && this.myForm.controls[campo].touched;
  }

  onSubmit(){
    if ( this.myForm.invalid ){
      this.myForm.markAsTouched();
      return
    }    

    this.clientService.setMessageContact(this.myForm.value).subscribe( resp =>{
      console.log(resp);
    } );
                
    
    this.myForm.reset();
  }

}
