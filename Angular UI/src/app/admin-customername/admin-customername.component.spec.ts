import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCustomernameComponent } from './admin-customername.component';

describe('AdminCustomernameComponent', () => {
  let component: AdminCustomernameComponent;
  let fixture: ComponentFixture<AdminCustomernameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCustomernameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCustomernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
