import { Component } from '@angular/core';
import { ThemeOptions } from '@dash/constants/theme-options';

@Component({
    selector: 'app-user-box',
    templateUrl: './user-box.component.html'
})
export class UserBoxComponent {
    constructor(public globals: ThemeOptions) {}
}
