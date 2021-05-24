import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'dialog-elements-example',
    templateUrl: 'dialog-elements-example.html',
    styleUrls: ['dialog-elements-example.css']
})
export class DialogElementsExample {
    constructor(public dialog: MatDialog) {}

    openDialog(): void {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        const dialogRef = this.dialog.open(DialogElementsExampleDialog, {
            // width: '500px'
            //data: { name: this.name, animal: this.animal }
        });

        dialogRef.afterClosed().subscribe((result) => {
            console.log('The dialog was closed');
        });
    }
}

@Component({
    selector: 'dialog-elements-example-dialog',
    templateUrl: 'dialog-elements-example-dialog.html',
    styleUrls: ['dialog-elements-example.css']
})
export class DialogElementsExampleDialog {
    constructor(public dialogRef: MatDialogRef<DialogElementsExampleDialog>) {}

    onNoClick(): void {
        this.dialogRef.close();
    }
}
