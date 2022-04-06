import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWarehouseLocationComponent } from './new-warehouse-location.component';

describe('NewWarehouseLocationComponent', () => {
  let component: NewWarehouseLocationComponent;
  let fixture: ComponentFixture<NewWarehouseLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewWarehouseLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewWarehouseLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
