import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RequestBackendService } from '../request-backend.service';
import Swal from 'sweetalert2';
import { GuardsCheckStart } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { DialogMecanicosComponent } from '../dialog-mecanicos/dialog-mecanicos.component';
import { format } from 'date-fns';



@Component({
  selector: 'app-mecanicos',
  templateUrl: './mecanicos.component.html',
  styleUrls: ['./mecanicos.component.scss']
})
export class MecanicosComponent implements OnInit {

    nombreUsuarioSeleccionado='j';
    
    titulo = "Mecanicos"
    value = '';
    title = 'TallerAngularMAterial';
    edad = 0;
  
    displayedColumns: string[] = ['Nombre', 'Apellidos', 'NumeroTelefono', 'FechaNacimiento','Correo', 'Acciones'];
    dataSource : any = [];
    showform = false;
    Boton = 'guardar';
  
    formUser : FormGroup = new FormGroup({});
  
    constructor(    private servicioBackend :RequestBackendService, 
                    private fb : FormBuilder,
                    private dialog : MatDialog 
                   ) { 
      this.formUser = this.fb.group({
        Nombre : [''],
        Apellidos : [''],
        FechaNacimiento : [''],
        NumeroTelefono : [''],
        Correo : [''],
        Acciones : [''],
        //Clave : ['']
      })
      
    }
    
  
    ngOnInit(): void {
      this.getUser();
    }
  
    seleccionarNombre(nombreNuevo : string) : void{
      this.nombreUsuarioSeleccionado= nombreNuevo;
      console.log(this.nombreUsuarioSeleccionado);   
  
    }
  
    cambiarTitulo():void{
      this.titulo='Usuarios del Taller';
    }
    devolvertitulo():void{
      this.titulo='Usuarios';
    }
  
    cambioNombreUsuario(nombre: string): void {
      for (const key in this.dataSource) {
       if(this.dataSource[key].name== this.nombreUsuarioSeleccionado){
        this.dataSource[key].name= nombre;
        return;
       }         
        }
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
  
     saveUser(): void{
      const datosUser = this.formUser.getRawValue();
      this.servicioBackend.posData('mecanicos',JSON.stringify(datosUser)).subscribe({
        next: (data) =>{
          console.log(data);
          this.getUser();
           
          Swal.fire(
            'Usuario Creado ',
            'Todo Ready',
            'question'
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
     
  
     
  
     changeShowForm(): void{
        this.showform = !this.showform;
  
     }
  
     selectUser(user: any): void{
      this.showform = true;
      this.formUser.patchValue(user);
     }
  
     deletePropietario(code:string):void{
      console.log(code);
      Swal.fire({
        title: 'Est?? seguro de eliminar este usuario?',
        //showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Eliminar',
        //denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.servicioBackend.deleteData('mecanicos',code).subscribe({
            next: (data) =>{
              console.log(data);
              this.getUser();             
              Swal.fire(
                'Ok',
                'Usuario Eliminado',
                'success'
      );
            },
            error:(error)=>{
              console.log(error);
              Swal.fire(
                'Usuario No Eliminado',
                'Error En el proceso',
                'question'
      );
            },
            complete:()=>{
              console.log('complete');
            }
          });
      
          //console.log(datosUser);   
  
          Swal.fire('Saved!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
     }
  
  
  
     updatePropietario():void{ 
        
   }
  
   openDialogAdd(user?: string) {
    const dialogRef=   this.dialog.open(DialogMecanicosComponent,{
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
  
  openDialogEdit(user?: string) {
    const dialogRef=   this.dialog.open(DialogMecanicosComponent,{
      //width: '330px',
      //height: '400px',
      data: {
        user: user,
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
  
  filtrar(): void {
  
    this.servicioBackend.getDataFilter('mecanicos',this.value,'Nombre').subscribe(
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
  
    }
