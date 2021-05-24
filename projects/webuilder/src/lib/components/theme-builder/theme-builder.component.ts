import { Component } from '@angular/core';
import { THEME } from '@webuilder/constants/themes-constants';
import { WebuilderFacade } from '@webuilder/+store/webuilder.facade';
import { ThrowStmt } from '@angular/compiler';

@Component({
    selector: 'lib-theme-builder',
    templateUrl: './theme-builder.component.html',
    styleUrls: ['./theme-builder.component.scss']
})
export class ThemeBuilderComponent {
    Design = true;
    btnActive = 'btnActive';
    btnActive2 = '';
    themes = THEME;
    mainColor = '#ffffff';
    secondColor = '#383e56';
    thirdColor = '#38383b';
    constructor(private webFacade: WebuilderFacade) {}

    changeColorBtn(mainColor, secondColor, thirdColor) {
        this.webFacade.addTheme({
            mainColor: mainColor,
            secondColor: secondColor,
            thirdColor: thirdColor
        });
    }
    colorPick1(event) {
        this.mainColor = event;
    }
    colorPick2(event) {
        this.secondColor = event;
    }
    colorPick3(event) {
        this.thirdColor = event;
    }
    swapPanel(swap) {
        if (swap === 'Own') {
            this.btnActive2 = 'btnActive';
            this.btnActive = '';
            this.Design = false;
        }
        if (swap === 'Des') {
            this.btnActive2 = '';
            this.btnActive = 'btnActive';
            this.Design = true;
        }
    }
}
