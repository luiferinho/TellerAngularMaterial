import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudMecanicoComponent } from './administracion/crud-mecanico/crud-mecanico.component';
import { CrudPropietarioComponent } from './administracion/crud-propietario/crud-propietario.component';
import { CrudVehiculoComponent } from './administracion/crud-vehiculo/crud-vehiculo.component';
import { RevisionesComponent } from './revisiones/revisiones.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { MecanicosComponent } from './mecanicos/mecanicos.component';
import { VehiculoComponent } from './vehiculo/vehiculo.component';
import { SolicitudRevisionComponent } from './solicitud-revision/solicitud-revision.component';






const routes: Routes = [
  {path:'propietario', component : CrudPropietarioComponent},
  {path:'mecanicos', component : MecanicosComponent},
  {path:'vehiculos', component : VehiculoComponent},
  {path:'usuarios', component : UsuariosComponent},
  {path:'revisiones', component : RevisionesComponent},
  {path:'solicitud', component : SolicitudRevisionComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
