import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorAuthComponent } from './error-auth.component';

describe('ErrorAuthComponent', () => {
  let component: ErrorAuthComponent;
  let fixture: ComponentFixture<ErrorAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
