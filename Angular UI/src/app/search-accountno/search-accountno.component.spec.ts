import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAccountnoComponent } from './search-accountno.component';

describe('SearchAccountnoComponent', () => {
  let component: SearchAccountnoComponent;
  let fixture: ComponentFixture<SearchAccountnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAccountnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAccountnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
