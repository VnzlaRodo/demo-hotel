import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessagesService } from '../models/messageService';
import { MessagesContact } from '../models/messageContact';
import { Habitation } from '../models/habitation';
import { Client } from '../models/client';
import { Lodging } from '../models/lodging';
import { ApplicationLodging } from '../models/applicationLodging';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private url = 'http://127.0.0.1:8000/api';
  //private url = 'https://api-hotel.naguarasoftware.com/api';

  habitations_available: Habitation[] = [];
  checks: any;

  constructor( private _http: HttpClient ) { }

  setMessageServices( message: MessagesService){
    return this._http.post(`${this.url}/messageservices-public`, message);
  }

  setMessageContact( message: MessagesContact ){
    return this._http.post(`${this.url}/messageContacts-public`,message);
  }

  consultHabitation( request: any ){
    return this._http.post<Habitation[]>(`${this.url}/lodgings/forrange`, request);
  }

  private setclient( client: Client ){
    return this._http.post<Client>(`${this.url}/clients-public`, client);
  }

  private setLodging( lodging: Lodging ){
    return this._http.post<Lodging>(`${this.url}/lodgings-public`, lodging);
  }

  setApplicationLodging( application: ApplicationLodging ){

    let clientTemp: Client = {
      id: "",
      cedula: application.tipoIdentidad + application.cedula,
      name: application.name,
      lastname: application.lastname,
      phone: application.phone,
      email: application.email,
      address: application.address,
      avatar: application.avatar
    };
    
    let client: Client;
    let lodgingTemp: Lodging;
    
    this.setclient(clientTemp).subscribe( (resp: any) => {
      client = resp.client;
      console.log(resp);
      lodgingTemp = {
        id_client: client.id,
        checkin: application.checkin,
        checkout: application.checkout,
        adults: application.adults,
        children: application.children
      }

      this.setLodging( lodgingTemp ).subscribe( resp => {
        console.log(resp);
      });

    });
    
  }

}
