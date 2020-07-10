import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'lib-text-builder',
    templateUrl: './text-builder.component.html',
    styleUrls: ['./text-builder.component.scss']
})
export class TextBuilderComponent implements OnInit {
    value1 = '';
    value2 = '';
    value3 = '';
    FirstSection = true;
    SecondSection = false;
    constructor() {}

    ngOnInit(): void {}

    goToSection2() {
        this.FirstSection = false;
        this.SecondSection = true;
        this.value1 = '';
        this.value2 = '';
        document.body.scrollTop = 600;
        document.documentElement.scrollTop = 600;
    }
    goToSection1() {
        this.FirstSection = true;
        this.SecondSection = false;
        this.value1 = '';
        this.value2 = '';
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
}
