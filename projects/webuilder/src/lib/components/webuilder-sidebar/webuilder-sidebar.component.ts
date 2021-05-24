import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'lib-webuilder-sidebar',
    templateUrl: './webuilder-sidebar.component.html',
    styleUrls: ['./webuilder-sidebar.component.scss']
})
export class WebuilderSidebarComponent implements OnInit {
    @Output() barClose = new EventEmitter<boolean>();

    ngOnInit(): void {
        this.openNav();
    }

    openNav() {
        document.getElementById('mySidebar').style.width = '350px';

        document.getElementById('main').style.marginLeft = '350px';
        document.getElementById('main').style.position = 'static';
        this.barClose.emit(false);
    }

    closeNav() {
        this.barClose.emit(true);
        document.getElementById('mySidebar').style.width = '0';

        document.getElementById('main').style.marginLeft = '0px';
        document.getElementById('main').style.zIndex = '9999999';
        document.getElementById('main').style.position = 'fixed';
    }
}
