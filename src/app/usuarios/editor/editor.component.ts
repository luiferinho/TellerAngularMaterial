import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  @Input() nombre ='';
  @Output()salidaCambionombre = new EventEmitter();

  titulo = "Usuarios"
  value = 'Clear me';
  title = 'TallerAngularMAterial';
  edad = 0;

  constructor() { }

  ngOnInit(): void {
  }

  cambiarTitulo():void{
    this.titulo='Usuarios del Taller';
  }
  devolvertitulo():void{
    this.titulo='Usuarios';
  }

  cambiarNombre():void{
    this.salidaCambionombre.next(this.nombre);
  }

}
