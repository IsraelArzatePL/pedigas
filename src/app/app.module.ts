import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LayoutComponent } from './components/layout/layout.component';
import { SignComponent } from './components/sign/layout/sign.component';
import { ChartsModule } from 'ng2-charts';
import { DialogAddUser } from './helpers/dialogs/addusers/addusers.component';
import { DialogAddPickup } from './helpers/dialogs/addpickup/addpickup.component';

// Progress Bar
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { DialogUserDetail } from './helpers/dialogs/userdetail/userdetail.component';

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        SignComponent,
        // Dialogs
        DialogAddUser,
        DialogAddPickup,
        DialogUserDetail
    ],
    entryComponents: [
        DialogAddUser,
        DialogAddPickup,
        DialogUserDetail
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        ChartsModule,
        LoadingBarHttpClientModule,
        LoadingBarRouterModule,
        LoadingBarModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
