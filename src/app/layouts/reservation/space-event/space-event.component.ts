import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-space-event',
  templateUrl: './space-event.component.html',
  styleUrls: ['./space-event.component.scss']
})
export class SpaceEventComponent implements OnInit {

  spaces = DataSpaces;

  constructor() { }

  ngOnInit(): void {
  }

}


export const DataSpaces : any [] = [
  { id: '1', name: 'Salon de reuniones', status: 'Activo', size: 'xx Mts', amount: 'xx personas', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis possimus fugit accusamus autem esse.', imagenes: ['https://images.unsplash.com/photo-1558008258-3256797b43f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80'] },
  { id: '2', name: 'Oficina privada', status: 'Activo', size: 'xx Mts', amount: 'xx personas', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis possimus fugit accusamus autem esse.', imagenes: ['https://images.unsplash.com/photo-1570126646281-5ec88111777f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=841&q=80'] },
  { id: '3', name: 'Salon principal', status: 'Activo', size: 'xx Mts', amount: 'xx personas', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis possimus fugit accusamus autem esse.', imagenes: ['https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=898&q=80'] },
  { id: '4', name: 'Piscina', status: 'Activo', size: 'xx Mts', amount: 'xx personas', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis possimus fugit accusamus autem esse.', imagenes: ['https://images.unsplash.com/photo-1623718649591-311775a30c43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'] },
  { id: '5', name: 'Bar Hotel', status: 'Activo', size: 'xx Mts', amount: 'xx personas', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis possimus fugit accusamus autem esse.', imagenes: ['https://images.unsplash.com/photo-1606565471405-f4e6e7b4f2ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80'] },
  { id: '6', name: 'Restaurant Hotel', status: 'Activo', size: 'xx Mts', amount: 'xx personas', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis possimus fugit accusamus autem esse.', imagenes: ['https://images.unsplash.com/photo-1519690889869-e705e59f72e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'] },
];