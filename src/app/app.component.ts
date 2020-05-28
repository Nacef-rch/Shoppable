import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../projects/+store/app.reducer';
import * as AuthActions from '@authentication/+store/auth.actions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    constructor(private store: Store<fromApp.AppState>) {}
    ngOnInit() {
        this.store.dispatch(new AuthActions.AutoLogin());
    }
    title = 'Shoppable';
}
