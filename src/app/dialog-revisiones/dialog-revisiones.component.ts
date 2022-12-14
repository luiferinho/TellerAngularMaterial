import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { RequestBackendService } from '../request-backend.service';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';


@Component({
  selector: 'app-dialog-revisiones',
  templateUrl: './dialog-revisiones.component.html',
  styleUrls: ['./dialog-revisiones.component.scss']
})
export class DialogRevisionesComponent implements OnInit {

  formUser : FormGroup = new FormGroup({});
  showform = false;  
  Boton = 'guardar';
  dataSource : any = [];
  dataSourceV: any = [];
  dataSourceR : any = [];

  constructor( private fb : FormBuilder,
                private servicioBackend :RequestBackendService,
                @Inject(MAT_DIALOG_DATA) public data: any,
                public dialogRef: MatDialogRef<DialogRevisionesComponent>) { 
    this.formUser = this.fb.group({
      //idrevision : [''],     
      nivelaceite : [''],
      nivelliquidof : [''],
      nivelRefrigerante : [''],
      NivelLquidoDireccion : [''],
      vehiId : [''],
      solicitudRevisionId : [''],
      fecha : [''],      
      mecanicoId : [''],
      Observaciones : [''],
      //Correo : [''],
      //Acciones : [''],
      //Clave : ['']     
    });

    if(data && data.user){
      this.formUser.patchValue(data.user)
      console.log(data);
      this.Boton= data.Boton;
    } 
  }

  ngOnInit(): void {
    this.getUser();
    this.getVehi();
    this.getSolicitud();
  }

  ngAfterViewInit(): void{
    if(this.data && this.data.user){
      const user = JSON.parse(JSON.stringify(this.data.user));
      user['fecha']= user['fecha'].split('T')[0];
      this.formUser.patchValue(user);
      console.log(user);
      this.Boton= this.data.Boton;

    }

  }




  saveUser(): void{
    const datosUser = this.formUser.getRawValue();
    datosUser.fecha= new Date;
    this.servicioBackend.posData('revisiones',JSON.stringify(datosUser)).subscribe({
      next: (data) =>{
      

        console.log(data);
        this.getUser();
         
        Swal.fire(
          'Revision Creada ',
          'Todo Ready',
          'success'
);this.dialogRef.close(true);
      },
      error:(error)=>{
        console.log(error);
        Swal.fire(
          'Revision No Creada',
          'Error En el proceso',
          'question'
);
      },
      complete:()=>{
        console.log('complete');
      }
    });     

    console.log(datosUser);
    
   }

   showBoton(boton : string):void{
    this.Boton= boton;
   }

   getUser(): void{
    this.servicioBackend.getData('mecanicos').subscribe(
      (data) =>{
        this.dataSource=data;
        //console.log(data[2].Nombre)
      },
      (error) =>{
        console.log(error);
        this.dataSource=[];
        alert(error.message)
      }
    )
   }

   getVehi(): void{
    this.servicioBackend.getData('vehis').subscribe(
      (data) =>{
        this.dataSourceV=data;
        //console.log(data[2].Nombre)
      },
      (error) =>{
        console.log(error);
        this.dataSource=[];
        alert(error.message)
      }
    )
   }

   getSolicitud(): void{
    this.servicioBackend.getData('solicitud-revisions').subscribe(
      (data) =>{
        this.dataSourceR=data;
        //console.log(data[2].Nombre)
      },
      (error) =>{
        console.log(error);
        this.dataSource=[];
        alert(error.message)
      }
    )
   }

   updatePropietario():void{ 
      const newData = this.formUser.getRawValue();
      newData.fecha= new Date;
      this.servicioBackend.updateData('revisiones',JSON.stringify(newData),newData.Cedula).subscribe({
        next: (data) =>{
          console.log(data);
          this.getUser();
           
          Swal.fire(
            'Revision Editada ',
            'Todo Ready',
            'success'
  );this.dialogRef.close(true);
        },
        error:(error)=>{
          console.log(error);
          Swal.fire(
            'Revision No Editada',
            'Error En el proceso',
            'question'
  );
        },
        complete:()=>{
          console.log('complete');
        }
      });     
  
      console.log(newData);
      
  
     }
  }


