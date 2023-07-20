import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { EventClient } from 'src/app/models/eventClient';
import { TypeHabitation } from 'src/app/models/typehabitation';
import { TypeService } from 'src/app/models/typeservice';
import { ServicesService } from 'src/app/services/services.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dataService: TypeService[] = [];
  imagesHotel: any[] = [
                          {'name': 'piscina', 'images':'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'},
                          {'name': 'lobby de visitas', 'images':'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80'},
                          {'name': 'spa de lujo', 'images':'https://images.unsplash.com/photo-1527142879-95b61a0b8226?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=731&q=80'}
                        ];
  dataEvent : EventClient[] = [];

  typeHabitation: TypeHabitation[] = [];

  constructor( private services: ServicesService) { 

        this.services.getTypeHabitation()
                      .subscribe( (resp:any)=>{

                        this.typeHabitation = resp;
                       
                       
                      } );

        this.services.getServices()
                      .subscribe( (resp:any) =>{

                        this.dataService = resp;                        

                        
                      });

        this.services.getEvents()
                      .subscribe( (resp:any) => {

                        this.dataEvent = resp;
                       
                                                
                      });
  }

  ngOnInit(): void {   
    Aos.init();
  } 
}

export const DataServices: any[] = [
  { name: 'hospedaje', icono: 'assets/img/home/icono-1.png', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',  imagenes: ['https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80,https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80,https://images.unsplash.com/photo-1527142879-95b61a0b8226?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=731&q=80'] },
  { name: 'piscina',   icono: 'assets/img/home/icono-2.png', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',  imagenes: ['https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80','https://images.unsplash.com/photo-1603991488459-73de26c7c4f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80','https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80'] },
  { name: 'masaje',    icono: 'assets/img/home/icono-3.png', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',  imagenes: ['https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80','https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80','https://images.unsplash.com/photo-1611072172377-0cabc3addb30?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80'] },
  { name: 'tour',      icono: 'assets/img/home/icono-4.png', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',  imagenes: ['https://images.unsplash.com/photo-1512704515581-de233a09dae8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=793&q=80','https://images.unsplash.com/photo-1535507262368-51b419302759?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=333&q=80','https://images.unsplash.com/photo-1519915247718-1703f9c6bb15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=834&q=80'] },
  { name: 'souvenir',  icono: 'assets/img/home/icono-5.png', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',  imagenes: ['https://images.unsplash.com/photo-1493479874819-4303c36fa0f9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80','https://images.unsplash.com/photo-1542372177-002ea9732b17?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1542371927-2d9a6fae1794?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'] },
  { name: 'restaurant',icono: 'assets/img/home/icono-6.png', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',  imagenes: ['https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80','https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80','https://images.unsplash.com/photo-1527142879-95b61a0b8226?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=731&q=80'] },
]

export const DataEvents: any[] = [
  { name: 'Conferencia', date: '12/12/2022', space: 'Salon de reuniones', visibility: true, img: 'https://images.unsplash.com/photo-1558008258-3256797b43f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80' },
  { name: 'Consejo de inversionistas', date: '12/12/2022', space: 'Oficina privada', visibility: false, img: 'https://images.unsplash.com/photo-1570126646281-5ec88111777f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=841&q=80' },
  { name: 'Boda: El & Ella', date: '29/11/2022', space: 'Salon principal', visibility: true, img: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=898&q=80' },
  { name: 'Cumpleaños infantil', date: '30/11/2022', space: 'Piscina', visibility: true, img: 'https://images.unsplash.com/photo-1623718649591-311775a30c43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' },
  { name: 'Cocierto en vivo', date: '24/12/2022', space: 'Bar Hotel', visibility: true, img: 'https://images.unsplash.com/photo-1606565471405-f4e6e7b4f2ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80' },
  { name: 'Show food', date: '20/12/2022', space: 'Restaurant Hotel', visibility: true, img: 'https://images.unsplash.com/photo-1519690889869-e705e59f72e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' },
];