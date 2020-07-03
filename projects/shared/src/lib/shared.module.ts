//ANGULAR MODULES
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { environment } from '@env/environment';

//ANGULAR MATERIAL MODULES
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSliderModule } from '@angular/material/slider';

//BOOTSTRAP MODULES
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//FIREBASE
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';

//OTHER MODULES
import { PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { NotifierModule } from 'angular-notifier';

//LIBS
import { LoadingSpinnerComponent } from '@shared/components/loading-spinner/loading-spinner.component';
import {
    customNotifierOptions,
    DEFAULT_PERFECT_SCROLLBAR_CONFIG
} from '@shared/helpers/module-import.helper';
import { DirectivesModule } from '@shared/directives/directives.module';
import { InternationalizationModule } from '@i18n/internationalization.module';

import { MatDialogModule } from '@angular/material/dialog';
import { DialogElementsExample } from './Components/dialog-content-example/dialog-content-example.component';
import { ShopNotFoundComponent } from './Components/not-found/shop-not-found/shop-not-found.component';

const sharedModules: any[] = [
    HttpClientModule,
    FormsModule,
    CommonModule,
    DirectivesModule,
    ReactiveFormsModule,
    NotifierModule.withConfig(customNotifierOptions),
    MatIconModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    NgbModule,
    InternationalizationModule,
    PerfectScrollbarModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'cloud'),
    MatTableModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    MatSliderModule,
    MatDialogModule
];

@NgModule({
    declarations: [LoadingSpinnerComponent, DialogElementsExample, ShopNotFoundComponent],
    imports: sharedModules,
    providers: [
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }
    ],
    exports: [
        LoadingSpinnerComponent,
        DialogElementsExample,
        ShopNotFoundComponent,
        ...sharedModules
    ]
})
export class SharedModule {}
