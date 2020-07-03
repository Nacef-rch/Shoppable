import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultCheckoutComponent } from './default-checkout.component';

describe('DefaultCheckoutComponent', () => {
  let component: DefaultCheckoutComponent;
  let fixture: ComponentFixture<DefaultCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultCheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
