import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListServiceComponentComponent } from './list-service-component.component';

describe('ListServiceComponentComponent', () => {
  let component: ListServiceComponentComponent;
  let fixture: ComponentFixture<ListServiceComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListServiceComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListServiceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
