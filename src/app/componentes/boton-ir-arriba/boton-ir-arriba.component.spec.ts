import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonIrArribaComponent } from './boton-ir-arriba.component';

describe('BotonIrArribaComponent', () => {
  let component: BotonIrArribaComponent;
  let fixture: ComponentFixture<BotonIrArribaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonIrArribaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonIrArribaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
