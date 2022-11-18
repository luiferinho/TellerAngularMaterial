import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { RequestBackendService } from '../request-backend.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-dialog-mecanicos',
  templateUrl: './dialog-mecanicos.component.html',
  styleUrls: ['./dialog-mecanicos.component.scss']
})
export class DialogMecanicosComponent implements OnInit {

 
  
    formUser : FormGroup = new FormGroup({});
    showform = false;  
    Boton = 'guardar';
    dataSource : any = [];
    constructor(private fb : FormBuilder,
      private servicioBackend :RequestBackendService,
      @Inject(MAT_DIALOG_DATA) public data: any) { 
        this.formUser = this.fb.group({
          id : [''],
          Nombre : [''],
          Apellidos : [''],
          FechaNacimiento : [''],
          NumeroTelefono : [''],
          Correo : [''],
          NivelEstudio : [''],
          Direccion : [''],
  
  
      })
    }
 
  
    ngOnInit(): void {
    }
  
  
  
  
  
    ngAfterViewInit(): void{
      if(this.data && this.data.user){
        const user = JSON.parse(JSON.stringify(this.data.user));
        user['FechaNacimiento']= user['FechaNacimiento'].split('T')[0];
        this.formUser.patchValue(user);
        console.log(user);
        this.Boton= this.data.Boton;
  
  
      }
  
    }
    saveUser(): void{
      const datosUser = this.formUser.getRawValue();
      this.servicioBackend.posData('mecanicos',JSON.stringify(datosUser)).subscribe({
        next: (data) =>{
          console.log(data);
          this.getUser();
           
          Swal.fire(
            'Usuario Creado ',
            'Todo Ready',
            'success'
  );
        },
        error:(error)=>{
          console.log(error);
          Swal.fire(
            'Usuario No Creado',
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
          console.log(data[2].Nombre)
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
      this.servicioBackend.updateData('mecanicos',newData, newData.id)
  }
  
  
    
  }