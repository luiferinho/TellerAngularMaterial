import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPropietariosComponent } from './dialog-propietarios.component';

describe('DialogPropietariosComponent', () => {
  let component: DialogPropietariosComponent;
  let fixture: ComponentFixture<DialogPropietariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogPropietariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogPropietariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
