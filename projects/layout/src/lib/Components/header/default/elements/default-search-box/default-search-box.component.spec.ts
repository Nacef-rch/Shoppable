import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultSearchBoxComponent } from './default-search-box.component';

describe('DefaultSearchBoxComponent', () => {
  let component: DefaultSearchBoxComponent;
  let fixture: ComponentFixture<DefaultSearchBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultSearchBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
