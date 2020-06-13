import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarDashComponent } from './side-bar-dash.component';

describe('SideBarDashComponent', () => {
  let component: SideBarDashComponent;
  let fixture: ComponentFixture<SideBarDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideBarDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
