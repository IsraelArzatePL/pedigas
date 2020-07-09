import { NgModule } from "@angular/core";
import { UpComponent } from './up.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    {
        path: '',
        component: UpComponent
    }
]

@NgModule({
    declarations: [
        UpComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        MaterialModule,
        CommonModule
    ]
})
export class UpModule {}