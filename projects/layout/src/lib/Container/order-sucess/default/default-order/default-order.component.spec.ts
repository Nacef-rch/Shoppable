import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultOrderComponent } from './default-order.component';

describe('DefaultOrderComponent', () => {
  let component: DefaultOrderComponent;
  let fixture: ComponentFixture<DefaultOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
