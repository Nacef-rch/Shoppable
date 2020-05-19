import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { AuthenticationDirective } from './authentication.directive';

@Component({
    template: '<p authStyle>Testing Directives is awesome!</p>',
})
class TestComponent {}

describe('AuthenticationDirective', () => {
    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestComponent, AuthenticationDirective],
        });

        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
    });
    it('should create component', () => {
        expect(component).toBeDefined();
    });

    it('should capitalize text ', () => {
        const debugEl: HTMLElement = fixture.debugElement.nativeElement;
        const p: HTMLElement = debugEl.querySelector('p');

        fixture.detectChanges();

        expect(p.style.textTransform).toBe('uppercase');
    });
    it('should change background color ', () => {
        const debugEl: HTMLElement = fixture.debugElement.nativeElement;
        const p: HTMLElement = debugEl.querySelector('p');

        fixture.detectChanges();

        expect(p.style.backgroundColor).toBe('black');
    });
    it('should change text text ', () => {
        const debugEl: HTMLElement = fixture.debugElement.nativeElement;
        const p: HTMLElement = debugEl.querySelector('p');

        fixture.detectChanges();

        expect(p.style.color).toBe('white');
    });
});
