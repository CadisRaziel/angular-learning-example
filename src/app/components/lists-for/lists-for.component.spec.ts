import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsForComponent } from './lists-for.component';

describe('ListsForComponent', () => {
  let component: ListsForComponent;
  let fixture: ComponentFixture<ListsForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListsForComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
