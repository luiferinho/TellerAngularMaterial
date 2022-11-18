import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogMecanicosComponent } from './dialog-mecanicos.component';

describe('DialogMecanicosComponent', () => {
  let component: DialogMecanicosComponent;
  let fixture: ComponentFixture<DialogMecanicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogMecanicosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogMecanicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
