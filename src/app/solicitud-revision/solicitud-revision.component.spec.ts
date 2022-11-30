import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudRevisionComponent } from './solicitud-revision.component';

describe('SolicitudRevisionComponent', () => {
  let component: SolicitudRevisionComponent;
  let fixture: ComponentFixture<SolicitudRevisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudRevisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudRevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
