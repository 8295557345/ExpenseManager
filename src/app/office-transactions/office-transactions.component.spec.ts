import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeTransactionsComponent } from './office-transactions.component';

describe('OfficeTransactionsComponent', () => {
  let component: OfficeTransactionsComponent;
  let fixture: ComponentFixture<OfficeTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficeTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
