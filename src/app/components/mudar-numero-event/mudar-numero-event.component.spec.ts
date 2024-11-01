import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MudarNumeroEventComponent } from './mudar-numero-event.component';

describe('MudarNumeroEventComponent', () => {
  let component: MudarNumeroEventComponent;
  let fixture: ComponentFixture<MudarNumeroEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MudarNumeroEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MudarNumeroEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
