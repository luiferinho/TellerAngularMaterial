import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSolicitudRevisionComponent } from './dialog-solicitud-revision.component';

describe('DialogSolicitudRevisionComponent', () => {
  let component: DialogSolicitudRevisionComponent;
  let fixture: ComponentFixture<DialogSolicitudRevisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSolicitudRevisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogSolicitudRevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
