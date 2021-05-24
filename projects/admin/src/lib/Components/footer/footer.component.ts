import { Component } from '@angular/core';
import { AuthFacade } from '@authentication/+store/auth.facade';
import { Observable } from 'rxjs';
import { User } from '@authentication/models/user.model';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent {
    constructor(private authFacade: AuthFacade) {}
    public user$: Observable<User> = this.authFacade.user$;
}
