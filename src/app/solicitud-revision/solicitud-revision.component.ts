import { Component, OnInit } from '@angular/core';
import { ContentObserver } from '@angular/cdk/observers';
import { ThisReceiver } from '@angular/compiler';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RequestBackendService } from '../request-backend.service';
import Swal from 'sweetalert2';
import { GuardsCheckStart } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { DialogPropietariosComponent } from '../dialog-propietarios/dialog-propietarios.component';
import { format } from 'date-fns';
import { DialogRevisionesComponent } from '../dialog-revisiones/dialog-revisiones.component';
import { DialogSolicitudRevisionComponent } from '../dialog-solicitud-revision/dialog-solicitud-revision.component';
import { RevisionesComponent } from '../revisiones/revisiones.component';


@Component({
  selector: 'solicitud',
  templateUrl: './solicitud-revision.component.html',
  styleUrls: ['./solicitud-revision.component.scss']
})
export class SolicitudRevisionComponent implements OnInit {
  titulo = "Solicitud"
  value = '';
  valueV = '';

  displayedColumns: string[] = ['IdRevision','mecanicoId','Estado','fecha','idPropietario','Placa','Acciones'];
  dataSource : any = [];
  showform = false;
  Boton = 'guardar';

  formUser : FormGroup = new FormGroup({});

  constructor(private servicioBackend :RequestBackendService, 
    private fb : FormBuilder,
    private dialog : MatDialog ) { }

  ngOnInit(): void {
    this.getUser();
  }

  filtrar(): void {

    this.servicioBackend.getDataFilter('solicitud-revisions',this.value,'mecanicoId').subscribe(
      (data) =>{
        this.dataSource=data;
        console.log(data)
      },
      (error) =>{
        console.log(error);
        this.dataSource=[];
        alert(error.message)
      }
    )
  
  }

  filtrarP(): void {

    this.servicioBackend.getDataFilter('solicitud-revisions',this.valueV,'Placa').subscribe(
      (data) =>{
        this.dataSource=data;
        console.log(data)
      },
      (error) =>{
        console.log(error);
        this.dataSource=[];
        alert(error.message)
      }
    )
  
  }

  showBoton(boton : string):void{
    this.Boton= boton;
   }  
   

   changeShowForm(): void{
      this.showform = !this.showform;

   }
   openDialogAdd(user?: string) {
    const dialogRef=   this.dialog.open(DialogSolicitudRevisionComponent,{
      //width: '330px',
      //height: '400px',
      data: {
        user: null,
        Boton :'editar'
      }
    });dialogRef.afterClosed().subscribe((data=>{
      if(data){
        this.getUser();
      }
    }));
  }

  setFormat(dateString:string):string{
    const date = new Date (dateString);
    const newDate = format(date, 'd LLL yyyy');
    return newDate;
  }

  selectUser(user: any): void{
    this.showform = true;
    this.formUser.patchValue(user);
   }

   getUser(): void{
    this.servicioBackend.getData('solicitud-revisions').subscribe(
      (data) =>{
        this.dataSource=data;
        console.log(data)
      },
      (error) =>{
        console.log(error);
        this.dataSource=[];
        alert(error.message)
      }
    )
   }

   openDialogEdit(user?: string) {
    const dialogRef=   this.dialog.open(DialogSolicitudRevisionComponent,{
      //width: '330px',
      //height: '400px',
      data: {
        user: user,
        Boton :'editar' 
      }
    });
    dialogRef.afterClosed().subscribe((data=>{
      if(data){
        this.getUser();
      }
    }));
  }

  openDialogEdit2(user?: string) {
    const dialogRef=   this.dialog.open(DialogRevisionesComponent,{
      //width: '330px',
      //height: '400px',
      data: {
        user: user,
        Boton :'editar' 
      }
    });
    dialogRef.afterClosed().subscribe((data=>{
      if(data){
        this.getUser();
      }
    }));
  }

}
