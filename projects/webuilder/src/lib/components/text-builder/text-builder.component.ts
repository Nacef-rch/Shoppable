import { Component, OnInit } from '@angular/core';
import { WebuilderFacade } from '@webuilder/+store/webuilder.facade';

@Component({
    selector: 'lib-text-builder',
    templateUrl: './text-builder.component.html',
    styleUrls: ['./text-builder.component.scss']
})
export class TextBuilderComponent implements OnInit {
    value1 = '';
    value2 = '';
    value3 = '';
    value4 = '';

    FirstSection = true;
    SecondSection = false;
    ThirdSection = false;
    FourthSection = false;
    FifthSection = false;
    activeSection = 'FirstSection';
    constructor(private webFacade: WebuilderFacade) {}
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

    goToSection2() {
        this.FirstSection = false;
        this.SecondSection = true;
        this.ThirdSection = false;
        this.FourthSection = false;
        this.FifthSection = false;
        this.value1 = '';
        this.value2 = '';
        document.body.scrollTop = 600;
        document.documentElement.scrollTop = 600;
    }
    goToSection1() {
        this.FirstSection = true;
        this.SecondSection = false;
        this.ThirdSection = false;
        this.FourthSection = false;
        this.FifthSection = false;
        this.value1 = '';
        this.value2 = '';
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    goToSection3() {
        this.FirstSection = false;
        this.SecondSection = false;
        this.ThirdSection = true;
        this.FourthSection = false;
        this.FifthSection = false;
        this.value1 = '';
        this.value2 = '';
        this.value3 = '';
        document.body.scrollTop = 1800;
        document.documentElement.scrollTop = 1800;
    }
    goToSection4() {
        this.FirstSection = false;
        this.SecondSection = false;
        this.ThirdSection = false;
        this.FourthSection = true;
        this.FifthSection = false;
        this.value1 = '';
        this.value2 = '';
        this.value3 = '';
        this.value4 = '';
        document.body.scrollTop = 2300;
        document.documentElement.scrollTop = 2300;
    }
    goToSection5() {
        this.FirstSection = false;
        this.SecondSection = false;
        this.ThirdSection = false;
        this.FourthSection = false;
        this.FifthSection = true;
        this.value1 = '';
        this.value2 = '';
        this.value3 = '';
        this.value4 = '';

        document.body.scrollTop = 2800;
        document.documentElement.scrollTop = 2800;
    }
    backTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    onClick() {
        const firstSection = {
            firstText: 'Shop is fun',
            secondText: 'Browse Our Premium Product',
            thirdText:
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley',
            fourthText: 'Browse Now'
        };

        this.webFacade.addText('test', firstSection);
    }
    firstText(event) {
        if (this.activeSection === 'FirstSection') {
            console.log('FirstSection');
            console.log(event);
        }
    }
}
