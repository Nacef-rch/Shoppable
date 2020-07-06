import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameBuildComponent } from './name-build.component';

describe('NameBuildComponent', () => {
  let component: NameBuildComponent;
  let fixture: ComponentFixture<NameBuildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameBuildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
