import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCoolStuffComponent } from './my-cool-stuff.component';

describe('MyCoolStuffComponent', () => {
  let component: MyCoolStuffComponent;
  let fixture: ComponentFixture<MyCoolStuffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCoolStuffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCoolStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
