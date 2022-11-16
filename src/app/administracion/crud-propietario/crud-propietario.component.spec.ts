import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudPropietarioComponent } from './crud-propietario.component';

describe('CrudPropietarioComponent', () => {
  let component: CrudPropietarioComponent;
  let fixture: ComponentFixture<CrudPropietarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudPropietarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudPropietarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
