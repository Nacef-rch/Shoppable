import { Injectable } from '@angular/core';

import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ImageUploadService {
    title = 'cloudsSorage';
    selectedFile: File = null;
    fb;
    downloadURL: Observable<string>;
    constructor(private storage: AngularFireStorage) {}

    public onFileSelected(event) {
        const n = Date.now();
        const file = event.target.files[0];
        const filePath = `RoomsImages/${n}`;
        const fileRef = this.storage.ref(filePath);
        const task = this.storage.upload(`RoomsImages/${n}`, file);
        task.snapshotChanges()
            .pipe(
                finalize(() => {
                    this.downloadURL = fileRef.getDownloadURL();
                    this.downloadURL.subscribe((url) => {
                        if (url) {
                            this.fb = url;
                        }
                        console.log(this.fb);
                    });
                })
            )
            .subscribe((url) => {
                if (url) {
                    console.log(url);
                    return url;
                }
            });
    }
}
