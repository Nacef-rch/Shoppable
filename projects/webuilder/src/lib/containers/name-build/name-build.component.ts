import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'lib-name-build',
    templateUrl: './name-build.component.html',
    styleUrls: ['./name-build.component.scss']
})
export class NameBuildComponent implements OnInit {
    public storeNameForm: FormGroup;

    public ngOnInit(): void {
        this.storeNameForm = new FormGroup({
            storeName: new FormControl(null, [Validators.required])
        });
    }
    public onSubmit(): void {
        console.log(this.storeNameForm.value.storeName);
    }
}
