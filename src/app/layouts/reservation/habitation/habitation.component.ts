import { Component, OnInit } from '@angular/core';
import { TypeHabitation } from 'src/app/models/typehabitation';

@Component({
  selector: 'app-habitation',
  templateUrl: './habitation.component.html',
  styleUrls: ['./habitation.component.scss']
})
export class HabitationComponent implements OnInit {

  typeHabitation: TypeHabitation[] = DataType;

  constructor() { }

  ngOnInit(): void {
  }

}


export const DataType: TypeHabitation[] = [
  { id: "1", name: "Duplex", status: "Activo", price: 30, description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis possimus fugit accusamus autem esse.",   imagenes: ["https://www.hoteleshesperia.com.ve/storage/app/uploads/public/59b/19c/ab5/59b19cab56693889036245.jpg","https://www.hoteleshesperia.com.ve/storage/app/uploads/public/59b/19c/ef1/59b19cef19c9e021287242.jpg","https://www.hoteleshesperia.com.ve/storage/app/uploads/public/5b0/857/ec3/5b0857ec31a6a493350480.jpg","https://www.hoteleshesperia.com.ve/storage/app/uploads/public/59b/2ff/378/59b2ff378714c511913412.jpg"] },
  { id: "2", name: "Matrimonial", status: "Activo", price: 60, description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis possimus fugit accusamus autem esse.", imagenes: ["https://www.hoteleshesperia.com.ve/storage/app/uploads/public/59b/19c/ab5/59b19cab56693889036245.jpg","https://www.hoteleshesperia.com.ve/storage/app/uploads/public/59b/19c/ef1/59b19cef19c9e021287242.jpg","https://www.hoteleshesperia.com.ve/storage/app/uploads/public/5b0/857/ec3/5b0857ec31a6a493350480.jpg","https://www.hoteleshesperia.com.ve/storage/app/uploads/public/59b/2ff/378/59b2ff378714c511913412.jpg"] },
  { id: "3", name: "Premium", status: "Activo", price: 100, description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis possimus fugit accusamus autem esse.", imagenes: ["https://www.hoteleshesperia.com.ve/storage/app/uploads/public/59b/19c/ab5/59b19cab56693889036245.jpg","https://www.hoteleshesperia.com.ve/storage/app/uploads/public/59b/19c/ef1/59b19cef19c9e021287242.jpg","https://www.hoteleshesperia.com.ve/storage/app/uploads/public/5b0/857/ec3/5b0857ec31a6a493350480.jpg","https://www.hoteleshesperia.com.ve/storage/app/uploads/public/59b/2ff/378/59b2ff378714c511913412.jpg"] }
];