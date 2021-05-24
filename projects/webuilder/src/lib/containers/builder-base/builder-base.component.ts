import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'lib-builder-base',
    templateUrl: './builder-base.component.html',
    styleUrls: ['./builder-base.component.scss']
})
export class BuilderBaseComponent {
    barClose(navBar: boolean) {
        if (navBar) {
            document.getElementById('SiteWarp').style.marginLeft = '-350px';
        }
        if (!navBar) {
            document.getElementById('SiteWarp').style.marginLeft = '0';
        }
    }
}
