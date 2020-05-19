import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[authStyle]',
})
export class AuthenticationDirective {
    constructor(el: ElementRef) {
        el.nativeElement.style.textTransform = 'uppercase';
        el.nativeElement.style.backgroundColor = 'black';
        el.nativeElement.style.color = 'white';
    }
}
