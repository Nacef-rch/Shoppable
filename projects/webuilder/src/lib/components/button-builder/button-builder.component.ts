import { Component } from '@angular/core';
import { WebuilderFacade } from '@webuilder/+store/webuilder.facade';

@Component({
    selector: 'lib-button-builder',
    templateUrl: './button-builder.component.html',
    styleUrls: ['./button-builder.component.scss']
})
export class ButtonBuilderComponent {
    styles = [];
    shapes = [];
    selectStyle = '';
    selectShape = '';
    constructor(private webFacade: WebuilderFacade) {}

    onChangeShape(select) {
        this.shapes = [];
        this.shapes.push(this.selectStyle);

        if (select === 'button-square') {
            this.shapes.push('button-square');
            this.selectShape = select;

            this.webFacade.addButton({
                style: this.shapes
            });
        }
        if (select === 'button-rounded') {
            this.shapes.push('button-rounded');
            this.selectShape = select;
            this.webFacade.addButton({
                style: this.shapes
            });
        }
        if (select === 'Pill') {
            this.shapes.push('');
            this.selectShape = select;
            this.webFacade.addButton({
                style: this.shapes
            });
        }
    }
    onChangeStyle(select) {
        this.styles = [];
        this.styles.push(this.selectShape);
        if (select === 'button-unFill') {
            this.styles.push('button-unFill');
            this.selectStyle = select;
            this.webFacade.addButton({
                style: this.styles
            });
        }
        if (select === 'Fill') {
            this.styles.push('');
            this.selectStyle = select;
            this.webFacade.addButton({
                style: this.styles
            });
        }
        if (select === 'button-dashed') {
            this.styles.push('button-dashed');
            this.selectStyle = select;
            this.webFacade.addButton({
                style: this.styles
            });
        }
    }
}
