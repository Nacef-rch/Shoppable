import { Component, OnInit } from '@angular/core';
import { WebuilderFacade } from '@webuilder/+store/webuilder.facade';
import { Observable } from 'rxjs';
import { Logo, ThemeWeb, ButtonsWeb, TextWeb } from '@webuilder/models/webuilder.model';

@Component({
    selector: 'lib-first-template-home',
    templateUrl: './first-template-home.component.html',
    styleUrls: ['./first-template-home.component.scss']
})
export class FirstTemplateHomeComponent implements OnInit {
    public logo$: Observable<Logo> = this.webFacade.logo$;
    public theme$: Observable<ThemeWeb> = this.webFacade.theme$;
    public button$: Observable<ButtonsWeb> = this.webFacade.button$;
    public text$: Observable<TextWeb> = this.webFacade.text$;
    main_color = 'white';
    secondary_color = '#84a9ac';
    main_bg_color = this.main_color;
    nav_bar_color = this.main_color;
    btn_bg_color = this.secondary_color;
    card_bg_color = this.main_color;
    btn_bg_text = this.main_color;
    sub_btn_colors = `1px solid ${this.main_bg_color}`;

    btn_border_color = `1px solid ${this.secondary_color}`;
    text_border_bottom = `2px solid ${this.secondary_color}`;
    nav_a_color = 'black';

    ///////////     TEXT
    web_text_FH4 = 'Shop is fun';
    web_text_FH1 = 'Browse Our Premium Product';
    web_text_FP =
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley ';
    web_text_FB = 'Browse Now';
    web_text_SP = 'Popular Item in the market';
    web_text_SH2 = 'Trending';
    web_text_SPN = 'Product';
    web_text_TH3 = 'Up To 50% Off';
    web_text_TH4 = 'Winter Sale';
    web_text_TP = 'Lorem Ipsum is simply dummy text';
    web_text_TB = 'Shop Now';
    web_text_FOH3 = 'Get Update From Anywhere';
    web_text_FOP = 'Bearing Void gathering light light his eavening unto dont afraid';
    web_text_FOI = 'Enter your email';
    web_text_FOB = 'Subscribe Now';
    web_text_footer_H4 = 'Our Mission';
    web_text_footer_P1 =
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer ';
    web_text_footer_P2 =
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s ';
    web_text_footer_H4_2 = 'Contact Us';
    web_text_footer_HO = ' Head Office';
    web_text_footer_AD = '123, Main Street, Your City';
    web_text_footer_PN = 'Phone Number';
    web_text_footer_FPN = '+123 456 7890 ';
    web_text_footer_SPN = '';
    web_text_footer_EMAIL = 'Email';
    web_text_footer_EMAIL_F = ' free@infoexample.com';
    web_text_footer_EMAIL_S = '';

    constructor(private webFacade: WebuilderFacade) {}
    ngOnInit(): void {
        this.theme$.subscribe((resData) => {
            this.main_color = resData.mainColor;
            this.secondary_color = resData.secondColor;
            this.main_bg_color = resData.mainColor;
            this.nav_bar_color = resData.mainColor;
            this.btn_bg_color = resData.secondColor;
            this.card_bg_color = resData.mainColor;
            this.btn_bg_text = resData.mainColor;
            this.sub_btn_colors = `1px solid ${this.main_bg_color}`;

            this.btn_border_color = `1px solid ${resData.secondColor}`;
            this.text_border_bottom = `2px solid ${resData.secondColor}`;
            this.nav_a_color = resData.thirdColor;
        });
        this.text$.subscribe((resData) => {
            //section 1
            this.web_text_FH4 = resData.firstSection.firstText;
            this.web_text_FH1 = resData.firstSection.secondText;
            this.web_text_FP = resData.firstSection.thirdText;
            this.web_text_FB = resData.firstSection.fourthText;
            //section 2
            this.web_text_SP = resData.secondSection.firstText;
            this.web_text_SH2 = resData.secondSection.secondText;
            this.web_text_SPN = resData.secondSection.thirdText;
            //Section 3
            this.web_text_TH3 = resData.thirdSection.firstText;
            this.web_text_TH4 = resData.thirdSection.secondText;
            this.web_text_TP = resData.thirdSection.thirdText;
            this.web_text_TB = resData.fourthSection.fourthText;
            //Section 4
            this.web_text_FOH3 = resData.fourthSection.firstText;
            this.web_text_FOP = resData.fourthSection.secondText;
            this.web_text_FOI = resData.fourthSection.thirdText;
            this.web_text_FOB = resData.fourthSection.fourthText;
            //Section 5
            this.web_text_footer_P1 = resData.fifthSection.firstText;
            this.web_text_footer_P2 = resData.fifthSection.secondText;
            this.web_text_footer_AD = resData.fifthSection.thirdText;
            this.web_text_footer_FPN = resData.fifthSection.fourthText;
            this.web_text_footer_EMAIL_F = resData.fifthSection.fifthText;
        });
    }

    back_img_url =
        'https://firebasestorage.googleapis.com/v0/b/kila-2352b.appspot.com/o/RoomsImages%2F1594239874379?alt=media&token=199409f9-d98a-490b-800c-346df5dcbb71';
    nav_logo = 'Nacef Store';
    logo_class = 'header-title-text';
    btn_class = 'button-rounded';

    //header-title-text-1 2 3

    // #384aeb

    offer_img_url =
        'url(https://firebasestorage.googleapis.com/v0/b/kila-2352b.appspot.com/o/RoomsImages%2F1594247568882?alt=media&token=e5972990-f84c-4f41-b92f-3f2e312bb2b1) right center no-repeat';
}
