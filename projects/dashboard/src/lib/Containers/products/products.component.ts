import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductFacade } from '@product/+store/product.facade';
import { ProductImport } from '@product/models/product.model';
import { Observable } from 'rxjs';

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
    product: ProductImport;
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
    public error$: Observable<string> = this.prodFacade.error$;

    constructor(private cd: ChangeDetectorRef, public prodFacade: ProductFacade) {}
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
        this.product = {
            categoryId: this.productForm.value.category,
            name: this.productForm.value.Title,
            description: this.productForm.value.Description,
            imageUrl:
                'https://images.squarespace-cdn.com/content/v1/5a5906400abd0406785519dd/1552662149940-G6MMFW3JC2J61UBPROJ5/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/baelen.jpg?format=1500w'
        };
        console.log(this.product);
        this.prodFacade.importStart(
            this.product.categoryId,
            this.product.name,
            this.product.description,
            this.product.imageUrl
        );
    }
    public ngOnDestroy(): void {
        this.prodFacade.clearError();
        this.prodFacade.clearSuccess();
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
