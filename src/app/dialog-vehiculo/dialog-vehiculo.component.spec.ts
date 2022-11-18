import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogVehiculoComponent } from './dialog-vehiculo.component';

describe('DialogVehiculoComponent', () => {
  let component: DialogVehiculoComponent;
  let fixture: ComponentFixture<DialogVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogVehiculoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
