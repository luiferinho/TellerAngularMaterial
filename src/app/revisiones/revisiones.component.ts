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

@Component({
  selector: 'app-revisiones',
  templateUrl: './revisiones.component.html',
  styleUrls: ['./revisiones.component.scss']
})
export class RevisionesComponent implements OnInit {
  titulo = "Revisiones"
  value = '';

  displayedColumns: string[] = ['vehiId','mecanicoId','nivelaceite','nivelRefrigerante','nivelliquidof','NivelLquidoDireccion','fecha','Acciones'];
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

    this.servicioBackend.getDataFilter('revisiones',this.value,'mecanicoId').subscribe(
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
    const dialogRef=   this.dialog.open(DialogPropietariosComponent,{
      //width: '330px',
      //height: '400px',
      data: {
        user: null,
        Boton :'editar'
      }
    });
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
    this.servicioBackend.getData('revisiones').subscribe(
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
    const dialogRef=   this.dialog.open(DialogPropietariosComponent,{
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
