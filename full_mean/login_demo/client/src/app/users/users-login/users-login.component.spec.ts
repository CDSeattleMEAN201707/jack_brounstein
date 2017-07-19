import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersLoginComponent } from './users-login.component';

describe('UsersLoginComponent', () => {
  let component: UsersLoginComponent;
  let fixture: ComponentFixture<UsersLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
