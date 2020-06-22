import { Component } from '@angular/core';

@Component({
    selector: 'lib-instagram',
    templateUrl: './instagram.component.html',
    styleUrls: ['./instagram.component.scss']
})
export class InstagramComponent {
    comment = false;
    like = false;

    onComment() {
        this.comment = !this.comment;
    }
    onLike() {
        this.like = !this.like;
    }
}
