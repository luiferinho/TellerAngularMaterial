import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { RequestBackendService } from '../request-backend.service';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';



@Component({
  selector: 'app-dialog-solicitud-revision',
  templateUrl: './dialog-solicitud-revision.component.html',
  styleUrls: ['./dialog-solicitud-revision.component.scss']
})
export class DialogSolicitudRevisionComponent implements OnInit {

  formUser : FormGroup = new FormGroup({});
  showform = false;  
  Boton = 'guardar';
  dataSource : any = [];
  dataSourceV: any = [];
  dataSourceP: any = [];
  cant: number = 0;

  constructor( private fb : FormBuilder,
                private servicioBackend :RequestBackendService,
                @Inject(MAT_DIALOG_DATA) public data: any,
                public dialogRef: MatDialogRef<DialogSolicitudRevisionComponent>) { 
    this.formUser = this.fb.group({
      //idrevision : [''],
      IdRevision : [''],
      Estado : [''],
      mecanicoId : [''],
      idPropietario : [''],
      Placa : [''],
      fecha : [''],
      
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
    this.getPropietario()
    this.countUser()
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
    datosUser.IdRevision = this.cant.toString();
    console.log(datosUser.IdRevision);
    datosUser.fecha= new Date;
    this.servicioBackend.posData('solicitud-revisions?',JSON.stringify(datosUser)).subscribe({
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

   countUser(): void{   
      this.servicioBackend.getData('solicitud-revisions/count').subscribe(
        (data) =>{
          this.cant= data.count +1;
          console.log(this.cant)
        })

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

   getPropietario(): void{
    this.servicioBackend.getData('propietarios').subscribe(
      (data) =>{
        this.dataSourceP=data;
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
      this.servicioBackend.updateData('solicitud-revisions',JSON.stringify(newData),newData.IdRevision).subscribe({
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



