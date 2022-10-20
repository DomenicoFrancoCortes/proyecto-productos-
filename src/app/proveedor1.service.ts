import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Proveedor1Service {

  constructor( 
    public http: HttpClient) {
      console.log('hola Proveedor')
     }

     obtenerDatos(){
      return this.http.get('https://jsonplaceholder.typicode.com/users');
     }
}
