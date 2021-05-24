import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { NotifierService } from 'angular-notifier';

import { ProductFacade } from '@product/+store/product.facade';
import { ProductImport } from '@product/models/product.model';
import { ImportProductModel } from '@admin/constants/page-titre.constant';
import { ImageUploadService } from '@shared/services/imageUpload.service';

@Component({
    selector: 'lib-products',
    templateUrl: './products-import.component.html',
    styleUrls: ['./products-import.component.scss']
})
export class ProductsImportComponent implements OnInit {
    private readonly notifier: NotifierService;
    private CategorySub: Subscription;
    private LoadSub: Subscription;
    public isLoading$: Observable<boolean> = this.prodFacade.loading$;
    public success$: Observable<string> = this.prodFacade.success$;
    public error$: Observable<string> = this.prodFacade.error$;
    public productForm: FormGroup;
    public options: any[] = [];
    public filteredOptions: Observable<string[]>;
    public product: ProductImport;
    public selectedValue: string;
    public icon: string = ImportProductModel.icon;
    public isLoading: boolean;
    public MsgSuccess: string;

    constructor(
        private cd: ChangeDetectorRef,
        public prodFacade: ProductFacade,
        public imageUp: ImageUploadService,
        public notifierService: NotifierService
    ) {
        this.notifier = notifierService;
    }
    public ngOnInit(): void {
        this.CategorySub = this.prodFacade.storeCategories$.subscribe((data) => {
            data.forEach((categoryRes) => {
                this.options.push(categoryRes);
            });

            this.productForm = new FormGroup({
                Title: new FormControl(null, [Validators.required, Validators.minLength(4)]),
                Description: new FormControl(null),
                Media: new FormControl(null, [Validators.required]),
                category: new FormControl(null, [Validators.required]),
                unitPrice: new FormControl(null, [Validators.required]),
                quantityInStock: new FormControl(null, [Validators.required])
            });

            this.filteredOptions = this.productForm.get('category').valueChanges.pipe(
                startWith(''),
                map((value) => this._filter(value))
            );
        });
    }
    public onSubmit(): void {
        this.product = {
            categoryId: this.productForm.value.category,
            name: this.productForm.value.Title,
            description: this.productForm.value.Description,
            imageUrl: this.productForm.value.Media,
            unitPrice: this.productForm.value.unitPrice,
            quantityInStock: this.productForm.value.quantityInStock
        };

        this.prodFacade.importStart(
            this.product.categoryId,
            this.product.name,
            this.product.description,
            this.product.imageUrl,
            this.product.unitPrice,
            this.product.quantityInStock
        );
        this.success$.subscribe((res) => {
            if (res) {
                this.notifier.notify('success', res);
            }
        });
        this.error$.subscribe((res) => {
            if (res) {
                this.notifier.notify('error', res);
            }
        });
        //this.productForm.reset();
    }
    public ngOnDestroy(): void {
        this.prodFacade.clearError();
        this.prodFacade.clearSuccess();
        // this.CategorySub.unsubscribe();
        // this.LoadSub.unsubscribe();
    }
    public onFileChange(event): void {
        this.imageUp.onFileSelected(event);
        this.isLoading = true;
        setTimeout(() => {
            this.LoadSub = this.isLoading$.subscribe((res) => {
                if (res == false) {
                    this.isLoading = false;
                    const ImageUrl = this.imageUp.fb;
                    if (ImageUrl) {
                        this.productForm.patchValue({
                            Media: ImageUrl
                        });
                    }
                }
            });
        }, 1000);
    }
    private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();

        return this.options.filter((option) => option.toLowerCase().indexOf(filterValue) === 0);
    }
}
