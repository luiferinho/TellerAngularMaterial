import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudPropietarioComponent } from './crud-propietario/crud-propietario.component';
import { CrudMecanicoComponent } from './crud-mecanico/crud-mecanico.component';
import { CrudVehiculoComponent } from './crud-vehiculo/crud-vehiculo.component';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    CrudPropietarioComponent,
    CrudMecanicoComponent,
    CrudVehiculoComponent
    
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,  
    MatTableModule

  ]
})
export class AdministracionModule { }
