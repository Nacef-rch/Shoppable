import { NgModule } from '@angular/core';
import { StartBuildComponent } from './containers/start-build/start-build.component';
import { TypeBuildComponent } from './containers/type-build/type-build.component';
import { NameBuildComponent } from './containers/name-build/name-build.component';
import { SharedModule } from '@shared/shared.module';
import { WebuilderRoutingModule } from './webuilder-routing.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@layout/layout.module';
import { TypeToEditComponent } from './containers/type-to-edit/type-to-edit.component';
import { WebuilderSidebarComponent } from './components/webuilder-sidebar/webuilder-sidebar.component';
import { BuilderBaseComponent } from './containers/builder-base/builder-base.component';
import { LogoBuilderComponent } from './components/logo-builder/logo-builder.component';
import { StoreModule } from '@ngrx/store';
import {
    webuilderStoreName,
    webuilderReducer,
    initialState
} from '@webuilder/+store/webuilder.reducer';
import { ThemeBuilderComponent } from './components/theme-builder/theme-builder.component';

@NgModule({
    declarations: [
        StartBuildComponent,
        TypeBuildComponent,
        NameBuildComponent,
        TypeToEditComponent,
        WebuilderSidebarComponent,
        BuilderBaseComponent,
        LogoBuilderComponent,
        ThemeBuilderComponent
    ],
    imports: [
        WebuilderRoutingModule,
        SharedModule,
        CommonModule,
        HttpClientModule,
        SharedModule,
        RouterModule,

        LayoutModule,
        StoreModule.forFeature(webuilderStoreName, webuilderReducer, {
            initialState: initialState
        })
        //EffectsModule.forFeature([WebuilderEffects])
    ],
    exports: []
})
export class WebuilderModule {}
