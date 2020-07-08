import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'lib-type-build',
    templateUrl: './type-build.component.html',
    styleUrls: ['./type-build.component.scss']
})
export class TypeBuildComponent implements OnInit {
    public storeTypeForm: FormGroup;

    public ngOnInit(): void {
        this.storeTypeForm = new FormGroup({
            storeType: new FormControl(null, [Validators.required])
        });
    }
    public onSubmit(): void {
        console.log(this.storeTypeForm.value.storeType);
    }
}
