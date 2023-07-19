import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { TypeService } from '../models/typeservice';
import { EventClient } from '../models/eventClient';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private url = 'http://127.0.0.1:8000/api';
  
  
  constructor( private _http: HttpClient ) { }

  //Home

  getServices(){

    return this._http.get<TypeService[]>(`${ this.url }/typeservices-public`)
                          .pipe((
                            map( resp => {
                              return resp.filter( (resp) => resp.show != 0 )
                            } )
                          ))        
  }

  getEvents(){

    var data:EventClient[]= [];
    var temp:EventClient = {"id": "0", "amount": 0, "avatar": "", "name": "", "price": 0, "space": { "name": ""}, "status": "", "type": {"name": ""}};
    return this._http.get<EventClient[]>(`${this.url}/events-public`)
                          .pipe((
                            map( resp => {
                              
                              for (let index = 0; index < resp.length; index++) {
                                
                                temp.id = resp[index].id;
                                temp.name = resp[index].name;
                                temp.price = resp[index].price;
                                temp.date = resp[index].date;
                                temp.amount = resp[index].amount;
                                temp.avatar = resp[index].avatar;
                                temp.status = resp[index].status;
                                temp.space.name = resp[index].space.name;
                                temp.space.amount = resp[index].space.amount;
                                temp.space.size = resp[index].space.size;
                                temp.type.name = resp[index].type.name;
                                temp.type.status = resp[index].type.status;

                                data.push(temp);
                                
                              }

                              return data;

                            })
                          ))
  }

  //Reservations
  getTypeHabitation(){

    return this._http.get(`${ this.url }/typehabitations-public`);
  }


  getHabitations(){
    return this._http.get(`${ this.url }/habitations`);
  }
  
}
