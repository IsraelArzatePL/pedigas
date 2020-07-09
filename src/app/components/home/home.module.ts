import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { MaterialModule } from 'src/app/material/material.module';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    }
]

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        MaterialModule,
        CommonModule
    ]
})
export class HomeModule {}