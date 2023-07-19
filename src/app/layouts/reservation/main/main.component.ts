import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    /* Animación Card Habitaciones */
    trigger( 'showMeH', [
      state('inactive', style({
        
        transform: 'rotateY(0)',
        right: '0',
        visibility: 'visible'
      })),
      state('active', style({
        transform: 'rotateY(240deg)',
        right: '80%',
        visibility: 'hidden'
      })),
      transition('inactive => active', animate('500ms ease-in')),
      transition('active => inactive', animate('500ms ease-out'))
    ]),
    /* Animación Card Eventos */
    trigger( 'showMeE', [
      state('inactive', style({
        
        transform: 'rotateY(0)',
        left: '0',
        visibility: 'visible'
      })),
      state('active', style({
        transform: 'rotateY(240deg)',
        left: '80%',
        visibility: 'hidden'
      })),
      transition('inactive => active', animate('500ms ease-in')),
      transition('active => inactive', animate('500ms ease-out'))
    ]),

    /* Animación Formulario */
    trigger( 'showForm', [
      state('inactive', style({

        visibility: 'hidden',
        opacity: '0'
      })),
      state('active', style({
        visibility: 'visible',
        opacity: '1'
      })),
      transition('inactive => active', animate('1000ms ease-in')),
      transition('active => inactive', animate('500ms ease-out'))
    ]),
  ]
})
export class MainComponent implements OnInit {

  state: string = 'inactive';
  stateFormH: string = 'inactive';
  stateFormE: string = 'inactive';

  constructor() { }

  ngOnInit(): void {
  }

  showMenuH(){
    this.state = this.state === 'active' ? 'inactive' : 'active';
    this.stateFormH = this.stateFormH === 'active' ? 'inactive' : 'active';
  }

  showMenuE(){
    this.state = this.state === 'active' ? 'inactive' : 'active';
    this.stateFormE = this.stateFormE === 'active' ? 'inactive' : 'active';
  }

}
