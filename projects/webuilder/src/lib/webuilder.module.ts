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

@NgModule({
    declarations: [
        StartBuildComponent,
        TypeBuildComponent,
        NameBuildComponent,
        TypeToEditComponent,
        WebuilderSidebarComponent,
        BuilderBaseComponent
    ],
    imports: [
        WebuilderRoutingModule,
        SharedModule,
        CommonModule,
        HttpClientModule,
        SharedModule,
        RouterModule,

        LayoutModule
    ],
    exports: []
})
export class WebuilderModule {}
