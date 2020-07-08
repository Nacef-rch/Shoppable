import { Component } from '@angular/core';

@Component({
    selector: 'lib-first-template-home',
    templateUrl: './first-template-home.component.html',
    styleUrls: ['./first-template-home.component.scss']
})
export class FirstTemplateHomeComponent {
    back_img_url =
        'https://firebasestorage.googleapis.com/v0/b/kila-2352b.appspot.com/o/RoomsImages%2F1594239874379?alt=media&token=199409f9-d98a-490b-800c-346df5dcbb71';
    nav_logo = 'Nacef Store';
    logo_class = 'header-title-text';
    //header-title-text-1 2 3
    main_color = 'white';
    secondary_color = 'blue';
    nav_a_color = 'black';
    // #384aeb

    btn_border_color = `1px solid ${this.secondary_color}`;
    text_border_bottom = `2px solid ${this.secondary_color}`;
    offer_img_url =
        'url(https://firebasestorage.googleapis.com/v0/b/kila-2352b.appspot.com/o/RoomsImages%2F1594247568882?alt=media&token=e5972990-f84c-4f41-b92f-3f2e312bb2b1) right center no-repeat';
}
