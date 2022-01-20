import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListadoComponent } from './listado/listado.component';
import { FormPersonaComponent } from './form-persona/form-persona.component';

const routes: Routes = [
  {
    path:"listado",
    component: ListadoComponent
  },
  {
    // este path lo llamamos como queramos. 
    path:"personas-add/:id", 
    component: FormPersonaComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
