import { Component, OnInit } from '@angular/core';
import { AjjaxService } from '../ajjax.service';
import { Persona } from '../persona';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  public lista_personas: Persona[]=[];
  constructor(private ajjax: AjjaxService) { }

  ngOnInit(): void {

    this.ajjax.listar().subscribe(resultado =>{

      console.log(resultado)
      this.lista_personas = resultado
      console.log(this.lista_personas);
      // resultado[1].);
    });

  }

  addPersona(){
    return "soy nueva persona"
  }
}
