import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { PickupsComponent } from './pickups.component';
import { MaterialModule } from 'src/app/material/material.module';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    {
        path: '',
        component: PickupsComponent
    }
]

@NgModule({
    declarations: [
        PickupsComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        MaterialModule,
        CommonModule
    ]
})
export class PickupsModule { }