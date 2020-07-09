import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details.component';
import { MaterialModule } from 'src/app/material/material.module';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { RoundProgressModule } from 'angular-svg-round-progressbar';

const routes: Routes = [
    {
        path: '',
        component: DetailsComponent
    }
]

@NgModule({
    declarations: [
        DetailsComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        MaterialModule,
        CommonModule,
        ChartsModule,
        RoundProgressModule
    ]
})
export class DetailsModule { }