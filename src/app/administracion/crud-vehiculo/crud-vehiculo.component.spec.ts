import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudVehiculoComponent } from './crud-vehiculo.component';

describe('CrudVehiculoComponent', () => {
  let component: CrudVehiculoComponent;
  let fixture: ComponentFixture<CrudVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudVehiculoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
