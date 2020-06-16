import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductFacade } from '@product/+store/product.facade';
import { ProductImport } from '@product/models/product.model';
import { Observable } from 'rxjs';
import { ImageUploadService } from '@shared/services/imageUpload.service';
import { startWith, map, timeout } from 'rxjs/operators';

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
    options: any[] = [];
    filteredOptions: Observable<string[]>;

    product: ProductImport;
    selectedValue: string;
    public productForm: FormGroup;
    // public imgUrlTest: Observable<string> = this.imageUp.downloadURL;
    public imgUrlTest;
    heading = 'Add product';
    subheading =
        'Tabs are used to split content between multiple sections. Wide variety available.';
    icon = 'pe-7s-drawer icon-gradient bg-happy-itmeo';
    categorys: Category[] = [
        { value: 'First', viewValue: 'First' },
        { value: 'Second', viewValue: 'Second' },
        { value: 'Third', viewValue: 'Third' }
    ];
    titre = 'short sleeve t-sirt';

    public error$: Observable<string> = this.prodFacade.error$;

    constructor(
        private cd: ChangeDetectorRef,
        public prodFacade: ProductFacade,
        public imageUp: ImageUploadService
    ) {}
    public ngOnInit(): void {
        this.prodFacade.storeCategories$.subscribe((data) => {
            data.forEach((categoryRes) => {
                this.options.push(categoryRes);
            });
            this.productForm = new FormGroup({
                Title: new FormControl(null, [Validators.required, Validators.minLength(4)]),
                Description: new FormControl(null),
                Media: new FormControl(null),

                category: new FormControl(null, [Validators.required]),
                unitPrice: new FormControl(null, [Validators.required]),
                quantityInStock: new FormControl(null, [Validators.required])
            });

            this.filteredOptions = this.productForm.get('category').valueChanges.pipe(
                startWith(''),
                map((value) => this._filter(value))
            );
            //this.options.push();

            //this.options.push(test[0]);
            // console.log(data);
        });
    }
    public onSubmit(): void {
        const ImageUrl = this.imageUp.fb;
        if (ImageUrl) {
            this.productForm.patchValue({
                Media: ImageUrl
            });
            this.product = {
                categoryId: this.productForm.value.category,
                name: this.productForm.value.Title,
                description: this.productForm.value.Description,
                imageUrl: this.productForm.value.Media,
                unitPrice: this.productForm.value.unitPrice,
                quantityInStock: this.productForm.value.quantityInStock
            };

            console.log(this.product);
            this.prodFacade.importStart(
                this.product.categoryId,
                this.product.name,
                this.product.description,
                this.product.imageUrl,
                this.product.unitPrice,
                this.product.quantityInStock
            );
        }
    }
    public ngOnDestroy(): void {
        this.prodFacade.clearError();
        this.prodFacade.clearSuccess();
    }
    onFileChange(event) {
        this.imageUp.onFileSelected(event);
    }
    private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();

        return this.options.filter((option) => option.toLowerCase().indexOf(filterValue) === 0);
    }
    onClick() {
        console.log(this.options);
    }
}
