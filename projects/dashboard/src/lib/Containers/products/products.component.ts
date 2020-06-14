import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

interface Category {
    value: string;
    viewValue: string;
}

@Component({
    selector: 'lib-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
    selectedValue: string;
    public productForm: FormGroup;
    heading = 'Add product';
    subheading =
        'Tabs are used to split content between multiple sections. Wide variety available.';
    icon = 'pe-7s-drawer icon-gradient bg-happy-itmeo';
    categorys: Category[] = [
        { value: 'First', viewValue: 'First' },
        { value: 'Second', viewValue: 'Second' },
        { value: 'Third', viewValue: 'Third' }
    ];

    constructor(private cd: ChangeDetectorRef) {}
    public ngOnInit(): void {
        this.productForm = new FormGroup({
            Title: new FormControl(null, [Validators.required, Validators.minLength(4)]),
            Description: new FormControl(null),
            Media: new FormControl(null, [Validators.required]),
            Price: new FormControl(null, [Validators.required]),
            category: new FormControl(null, [Validators.required])
        });
    }
    public onSubmit(): void {
        console.log(this.productForm);
    }
    onFileChange(event) {
        const reader = new FileReader();

        if (event.target.files && event.target.files.length) {
            const [file] = event.target.files;
            reader.readAsDataURL(file);

            reader.onload = () => {
                this.productForm.patchValue({
                    Media: reader.result
                });

                // need to run CD since file load runs outside of zone
                this.cd.markForCheck();
            };
        }
    }
}
