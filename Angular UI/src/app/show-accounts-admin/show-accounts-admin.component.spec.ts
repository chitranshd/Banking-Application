import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAccountsAdminComponent } from './show-accounts-admin.component';

describe('ShowAccountsAdminComponent', () => {
  let component: ShowAccountsAdminComponent;
  let fixture: ComponentFixture<ShowAccountsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAccountsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAccountsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
