import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEdtBannerComponent } from './modal-edt-banner.component';

describe('ModalEdtBannerComponent', () => {
  let component: ModalEdtBannerComponent;
  let fixture: ComponentFixture<ModalEdtBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEdtBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEdtBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
