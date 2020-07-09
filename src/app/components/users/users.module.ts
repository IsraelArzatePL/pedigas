import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { MaterialModule } from 'src/app/material/material.module';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    {
        path: '',
        component: UsersComponent
    }
]

@NgModule({
    declarations: [
        UsersComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        MaterialModule,
        CommonModule
    ]
})
export class UsersModule { }