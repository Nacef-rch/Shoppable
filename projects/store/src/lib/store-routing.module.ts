import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from '@store/Containers/template/default/default.component';
import { DefaultProductInfoComponent } from '@layout/Components/product-info/default/default-product-info/default-product-info.component';
import { DefaultSideBarComponent } from '@layout/Components/side-bar/default-side-bar/default-side-bar.component';
import { DefaultCartComponent } from '@layout/Container/cart/default/default-cart/default-cart.component';
import { DefaultOrderComponent } from '@layout/Container/order-sucess/default/default-order/default-order.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'shop',
        pathMatch: 'full'
    },
    {
        path: 'shop',
        component: DefaultComponent,
        children: [
            {
                path: '',
                component: DefaultSideBarComponent
            },
            {
                path: 'cart',
                component: DefaultCartComponent
            },
            {
                path: 'thankyou',
                component: DefaultOrderComponent
            },
            {
                path: ':category/:id',
                component: DefaultProductInfoComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StoreRoutingModule {}
