import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksCreateComponent } from './books-create.component';

describe('BooksCreateComponent', () => {
  let component: BooksCreateComponent;
  let fixture: ComponentFixture<BooksCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
