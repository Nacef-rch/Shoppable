import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { I18ntestComponent } from './i18ntest.component';

describe('I18ntestComponent', () => {
    let component: I18ntestComponent;
    let fixture: ComponentFixture<I18ntestComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [I18ntestComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(I18ntestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
