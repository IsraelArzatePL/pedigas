import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { RouteComponent } from './route.component';
import { MaterialModule } from 'src/app/material/material.module';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    {
        path: '',
        component: RouteComponent
    }
]

@NgModule({
    declarations: [
        RouteComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        MaterialModule,
        CommonModule
    ]
})
export class RouteModule {}