import {
    trigger,
    transition,
    style,
    query,
    group,
    animateChild,
    animate,
    keyframes
} from '@angular/animations';

export const fader = trigger('routeAnimations', [
    transition(':enter', [
        style({
            opacity: 0
        }),
        animate('600ms ease')
    ]),
    transition(':leave', [
        style({
            opacity: 1
        }),
        animate('600ms ease')
    ])
]);