import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AjjaxService {

  // url = 'https://swapi.dev/api/people?format=json';
  // url = "../../servidor.php"
  url = "http://localhost/serviciosWeb/listaPersonas/servidor.php"
  constructor(private ajjax: HttpClient) { }

  listar(){

    let data = {
      servicio :"listar"
    }
    return this.ajjax.post<any>(this.url, JSON.stringify(data));
    // return this.ajjax.get(this.url);  
  }
}
