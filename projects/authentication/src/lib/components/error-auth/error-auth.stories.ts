import { storiesOf } from '@storybook/angular';
import { ErrorAuthComponent } from './error-auth.component';
import { AppMockModules } from '@shared/mocks/app-mock-modules';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthFacade } from '@authentication/+store/auth.facade';

storiesOf('Authentication|Components/ErrorAuthComponent', module).add('default', () => ({
    component: ErrorAuthComponent,
    moduleMetadata: {
        imports: [AppMockModules],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        providers: [AuthFacade]
    }
}));
