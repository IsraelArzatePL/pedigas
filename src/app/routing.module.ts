import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutes } from './routing/routing';
import { LayoutComponent } from './components/layout/layout.component';
import { SignComponent } from './components/sign/layout/sign.component';

const routes: Routes = [
    {
        path: AppRoutes.root,
        component: LayoutComponent,
        loadChildren: './components/home/home.module#HomeModule'
    },
    {
        path: AppRoutes.route.path,
        component: LayoutComponent,
        loadChildren: './components/route/route.module#RouteModule',
    },
    {
        path: AppRoutes.details.path,
        component: LayoutComponent,
        loadChildren: './components/details/details.module#DetailsModule',
    },
    {
        path: AppRoutes.record.path,
        component: LayoutComponent,
        loadChildren: './components/record/record.module#RecordModule',
    },
    {
        path: AppRoutes.users.path,
        component: LayoutComponent,
        loadChildren: './components/users/users.module#UsersModule',
    },
    {
        path: AppRoutes.pickups.path,
        component: LayoutComponent,
        loadChildren: './components/pickups/pickups.module#PickupsModule',
    },
    {
        path: AppRoutes.sign.up,
        component: SignComponent,
        loadChildren: './components/sign/up/up.module#UpModule'
    },
    {
        path: AppRoutes.sign.in,
        component: SignComponent,
        loadChildren: './components/sign/in/in.module#InModule'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
