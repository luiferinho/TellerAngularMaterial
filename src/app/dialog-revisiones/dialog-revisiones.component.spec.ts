import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRevisionesComponent } from './dialog-revisiones.component';

describe('DialogRevisionesComponent', () => {
  let component: DialogRevisionesComponent;
  let fixture: ComponentFixture<DialogRevisionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogRevisionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogRevisionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
