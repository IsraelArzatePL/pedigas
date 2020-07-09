import { Component } from "@angular/core";
import { NavigationModel } from './nav.module';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { fader } from './route-animations';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: [ './layout.component.scss' ],
    animations: [
        fader
    ]
})
export class LayoutComponent {
    NavigationModel = NavigationModel;
    currentUrlPath: string;

    constructor(private router: Router) {
        router.events.pipe(
            filter(ev => ev instanceof NavigationEnd)
        ).subscribe((ev: any) => {
            this.currentUrlPath = ev.url;
        });
    }

    prepareRoute(outlet: RouterOutlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']; 
    }
}