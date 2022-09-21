import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraSocialVerticalComponent } from './barra-social-vertical.component';

describe('BarraSocialVerticalComponent', () => {
  let component: BarraSocialVerticalComponent;
  let fixture: ComponentFixture<BarraSocialVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraSocialVerticalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraSocialVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
