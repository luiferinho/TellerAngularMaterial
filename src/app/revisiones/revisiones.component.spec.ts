import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisionesComponent } from './revisiones.component';

describe('RevisionesComponent', () => {
  let component: RevisionesComponent;
  let fixture: ComponentFixture<RevisionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevisionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevisionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
