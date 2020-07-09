import { Component } from '@angular/core';
import { WebuilderFacade } from '@webuilder/+store/webuilder.facade';
import { Observable } from 'rxjs';
import { Logo } from '@webuilder/models/webuilder.model';

@Component({
    selector: 'lib-first-template-home',
    templateUrl: './first-template-home.component.html',
    styleUrls: ['./first-template-home.component.scss']
})
export class FirstTemplateHomeComponent {
    public logo$: Observable<Logo> = this.webFacade.logo$;
    constructor(private webFacade: WebuilderFacade) {}

    web_text_FH4 = 'Shop is fun';
    web_text_FH1 = 'Browse Our Premium Product';
    web_text_FP =
        'Us which over of signs divide dominion deep fill bring they re meat beho upon own earth without morning over third. Their male dry. They are great appear whose land fly grass.';
    web_text_FB = 'Browse Now';
    web_text_SP = 'Popular Item in the market';
    web_text_SH2 = 'Trending';
    web_text_SPN = 'Product';
    web_text_TH3 = 'Up To 50% Off';
    web_text_TH4 = 'Winter Sale';
    web_text_TP = 'Him she d let them sixth saw light';
    web_text_TB = 'Shop Now';
    web_text_FOH3 = 'Get Update From Anywhere';
    web_text_FOP = 'Bearing Void gathering light light his eavening unto dont afraid';
    web_text_FOI = 'Enter your email';
    web_text_FOB = 'Subscribe Now';
    web_text_footer_H4 = 'Our Mission';
    web_text_footer_P1 =
        'So seed seed green that winged cattle in. Gathering thing made fly you re no divided deep moved us lan Gathering thing us land years living.';
    web_text_footer_P2 =
        'So seed seed green that winged cattle in. Gathering thing made fly you re no divided deep moved';
    web_text_footer_H4_2 = 'Contact Us';
    web_text_footer_HO = ' Head Office';
    web_text_footer_AD = '123, Main Street, Your City';
    web_text_footer_PN = 'Phone Number';
    web_text_footer_FPN = '+123 456 7890 ';
    web_text_footer_SPN = '+123 456 7890 ';
    web_text_footer_EMAIL = 'Email';
    web_text_footer_EMAIL_F = ' free@infoexample.com';
    web_text_footer_EMAIL_S = '  www.infoexample.com';

    back_img_url =
        'https://firebasestorage.googleapis.com/v0/b/kila-2352b.appspot.com/o/RoomsImages%2F1594239874379?alt=media&token=199409f9-d98a-490b-800c-346df5dcbb71';
    nav_logo = 'Nacef Store';
    logo_class = 'header-title-text';
    btn_class = '';
    //button-square
    //header-title-text-1 2 3
    main_color = 'white';
    secondary_color = '#84a9ac';
    nav_a_color = 'black';
    // #384aeb
    main_bg_color = this.main_color;
    nav_bar_color = this.main_color;
    btn_bg_color = this.secondary_color;
    btn_bg_text = this.main_color;
    sub_btn_colors = `1px solid ${this.main_bg_color}`;
    card_bg_color = 'white';
    btn_border_color = `1px solid ${this.secondary_color}`;
    text_border_bottom = `2px solid ${this.secondary_color}`;
    offer_img_url =
        'url(https://firebasestorage.googleapis.com/v0/b/kila-2352b.appspot.com/o/RoomsImages%2F1594247568882?alt=media&token=e5972990-f84c-4f41-b92f-3f2e312bb2b1) right center no-repeat';
}
