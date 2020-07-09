import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { RecordComponent } from './record.component';
import { MaterialModule } from 'src/app/material/material.module';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    {
        path: '',
        component: RecordComponent
    }
]

@NgModule({
    declarations: [
        RecordComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        MaterialModule,
        CommonModule
    ]
})
export class RecordModule {}