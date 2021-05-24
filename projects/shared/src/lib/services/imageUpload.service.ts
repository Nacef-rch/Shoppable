import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { ProductFacade } from '@product/+store/product.facade';

@Injectable({
    providedIn: 'root'
})
export class ImageUploadService {
    public title = 'cloudsSorage';
    public selectedFile: File = null;
    public fb: string;
    public downloadURL: Observable<string>;
    constructor(private storage: AngularFireStorage, private productLoad: ProductFacade) {}

    public onFileSelected(event): void {
        const n = Date.now();
        const file = event.target.files[0];
        const filePath = `RoomsImages/${n}`;
        const fileRef = this.storage.ref(filePath);
        const task = this.storage.upload(`RoomsImages/${n}`, file);
        task.snapshotChanges()
            .pipe(
                tap(() => {
                    this.productLoad.loadingStart();
                }),
                finalize(() => {
                    this.downloadURL = fileRef.getDownloadURL();
                    this.downloadURL.subscribe((url) => {
                        if (url) {
                            this.fb = url;
                            this.productLoad.loadingStop();
                            console.log(url);
                        }
                    });
                })
            )
            .subscribe((url) => {
                if (url) {
                }
            });
    }
}
