import { Component, OnInit } from '@angular/core';
import { WebuilderFacade } from '@webuilder/+store/webuilder.facade';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
    selector: 'lib-logo-builder',
    templateUrl: './logo-builder.component.html',
    styleUrls: ['./logo-builder.component.scss']
})
export class LogoBuilderComponent implements OnInit {
    // header-title-text-cadre
    // header-title-text-1
    // header-title-text-2
    // header-title-text-3
    styles = [];
    logoText = 'Site Titre';
    logoColor = '';

    public logoForm: FormGroup;
    constructor(private webFacade: WebuilderFacade) {}
    ngOnInit(): void {
        this.logoForm = new FormGroup({
            logoText: new FormControl(null, [Validators.required, Validators.minLength(2)])
        });
    }

    onTextChange(logoText) {
        this.logoText = logoText;
        this.webFacade.addLogo({ text: this.logoText, color: this.logoColor, style: this.styles });
    }
    LogoStyleCadre(style) {
        if (style.checked === true) {
            this.styles.push('header-title-text-cadre');
            this.webFacade.addLogo({
                text: this.logoText,
                color: this.logoColor,
                style: this.styles
            });
        }
        if (style.checked === false) {
            this.styles.splice(this.styles.indexOf('header-title-text-cadre'), 1);
            this.webFacade.addLogo({
                text: this.logoText,
                color: this.logoColor,
                style: this.styles
            });
        }
    }
    LogoStyle1(style) {
        if (style.checked === true) {
            this.styles.push('header-title-text-1');
            this.webFacade.addLogo({
                text: this.logoText,
                color: this.logoColor,
                style: this.styles
            });
        }
        if (style.checked === false) {
            this.styles.splice(this.styles.indexOf('header-title-text-1'), 1);
            this.webFacade.addLogo({
                text: this.logoText,
                color: this.logoColor,
                style: this.styles
            });
        }
    }
    LogoStyle2(style) {
        if (style.checked === true) {
            this.styles.push('header-title-text-2');
            this.webFacade.addLogo({
                text: this.logoText,
                color: this.logoColor,
                style: this.styles
            });
        }
        if (style.checked === false) {
            this.styles.splice(this.styles.indexOf('header-title-text-2'), 1);
            this.webFacade.addLogo({
                text: this.logoText,
                color: this.logoColor,
                style: this.styles
            });
        }
    }
    LogoStyle3(style) {
        if (style.checked === true) {
            this.styles.push('header-title-text-3');
            this.webFacade.addLogo({
                text: this.logoText,
                color: this.logoColor,
                style: this.styles
            });
        }
        if (style.checked === false) {
            this.styles.splice(this.styles.indexOf('header-title-text-3'), 1);
            this.webFacade.addLogo({
                text: this.logoText,
                color: this.logoColor,
                style: this.styles
            });
        }
    }
    colorPick(event) {
        this.logoColor = event;

        this.webFacade.addLogo({ text: this.logoText, color: event, style: this.styles });
    }
}
