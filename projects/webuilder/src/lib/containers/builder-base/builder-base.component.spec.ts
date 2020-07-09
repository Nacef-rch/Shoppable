import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderBaseComponent } from './builder-base.component';

describe('BuilderBaseComponent', () => {
  let component: BuilderBaseComponent;
  let fixture: ComponentFixture<BuilderBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuilderBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuilderBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
