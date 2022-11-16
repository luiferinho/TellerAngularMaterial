import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vehiculo',
  templateUrl: './crud-vehiculo.component.html',
  styleUrls: ['./crud-vehiculo.component.scss']
})
export class CrudVehiculoComponent implements OnInit {
  value = 'Clear me';

  constructor() { }

  ngOnInit(): void {
  }

}
