import { Component, OnInit } from '@angular/core';
import { TypeHabitation } from 'src/app/models/typehabitation';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-habitation',
  templateUrl: './habitation.component.html',
  styleUrls: ['./habitation.component.scss']
})
export class HabitationComponent implements OnInit {

  typeHabitation: TypeHabitation[] = [];

  constructor( private services: ServicesService) { 
              this.services.getTypeHabitation()
                            .subscribe( (resp:any) => {

                              this.typeHabitation = resp;                             

                            });
  }

  ngOnInit(): void {
  }

}