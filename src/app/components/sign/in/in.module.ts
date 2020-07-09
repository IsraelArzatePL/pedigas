import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { CommonModule } from '@angular/common';
import { InComponent } from './in.component';

const routes: Routes = [
    {
        path: '',
        component: InComponent
    }
]

@NgModule({
    declarations: [
        InComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        MaterialModule,
        CommonModule
    ]
})
export class InModule {}