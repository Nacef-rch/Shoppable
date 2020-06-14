import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductFacade } from '@product/+store/product.facade';
import { ProductImport } from '@product/models/product.model';
import { Observable } from 'rxjs';
import { ImageUploadService } from '@shared/services/imageUpload.service';

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

    constructor(
        private cd: ChangeDetectorRef,
        public prodFacade: ProductFacade,
        public imageUp: ImageUploadService
    ) {}
    public ngOnInit(): void {
        this.productForm = new FormGroup({
            Title: new FormControl(null, [Validators.required, Validators.minLength(4)]),
            Description: new FormControl(null),
            Media: new FormControl(null),
            Price: new FormControl(null, [Validators.required]),
            category: new FormControl(null, [Validators.required])
        });
    }
    public onSubmit(): void {
        const ImageUrl = this.imageUp.fb;
        console.log(ImageUrl);
        this.productForm.patchValue({
            Media: ImageUrl
        });
        this.product = {
            categoryId: this.productForm.value.category,
            name: this.productForm.value.Title,
            description: this.productForm.value.Description,
            imageUrl: this.productForm.value.Media
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
        this.imageUp.onFileSelected(event);
        //todo add is loading !
    }
}
