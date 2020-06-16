import { Injectable } from '@angular/core';

import { AngularFireStorage } from '@angular/fire/storage';
import { finalize, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ProductFacade } from '@product/+store/product.facade';

@Injectable({
    providedIn: 'root'
})
export class ImageUploadService {
    title = 'cloudsSorage';
    selectedFile: File = null;
    fb;
    downloadURL: Observable<string>;
    constructor(private storage: AngularFireStorage, private productLoad: ProductFacade) {}

    public onFileSelected(event) {
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
                            return url;
                        }
                        //console.log(this.fb);
                    });
                })
            )
            .subscribe((url) => {
                if (url) {
                    // console.log(url);
                }
            });
    }
}
