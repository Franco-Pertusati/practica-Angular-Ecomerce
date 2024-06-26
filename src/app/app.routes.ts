import { Routes } from '@angular/router';

import { ListComponent } from './domains/products/pages/list/list.component'
import { ProductDetailComponent } from './domains/product-detail/pages/product-detail/product-detail.component';
import { NotFoundComponent } from './domains/info/pages/not-found/not-found.component';
import { LayoutComponent } from './domains/shared/components/layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                component: ListComponent
            },
            {
                path: 'product/:id',
                component: ProductDetailComponent
            },
        ]
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
