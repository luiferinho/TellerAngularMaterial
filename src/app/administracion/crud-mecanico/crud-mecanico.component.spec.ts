import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudMecanicoComponent } from './crud-mecanico.component';

describe('CrudMecanicoComponent', () => {
  let component: CrudMecanicoComponent;
  let fixture: ComponentFixture<CrudMecanicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudMecanicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudMecanicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
