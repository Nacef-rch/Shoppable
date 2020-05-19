import { Component, OnInit } from '@angular/core';
import { AuthenticationService, Snow } from '../authentication.service';

@Component({
    selector: 'lib-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
    constructor(private got: AuthenticationService) {}
    img = 'https://i.pinimg.com/originals/e3/98/57/e39857c9cff6a34811b4a467334c008d.jpg';
    showData = false;

    jon: Snow;

    ngOnInit(): void {
        this.got.fetchSnow().subscribe((res) => {
            this.jon = res;
        });
    }
    fetchData() {
        console.log(this.jon);
        this.showData = true;
    }
}
