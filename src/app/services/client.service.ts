import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessagesService } from '../models/messageService';
import { MessagesContact } from '../models/messageContact';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private url = 'http://127.0.0.1:8000/api';
  //private url = 'https://api-hotel.naguarasoftware.com/api';

  constructor( private _http: HttpClient ) { }

  setMessageServices( message: MessagesService){
    return this._http.post(`${this.url}/messageservices-public`, message);
  }

  setMessageContact( message: MessagesContact ){
    return this._http.post(`${this.url}/messageContacts-public`,message);
  }
}
