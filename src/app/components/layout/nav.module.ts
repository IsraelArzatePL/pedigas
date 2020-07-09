import { AppRoutes } from 'src/app/routing/routing';

export const NavigationModel = [
    {
        url: '/' + AppRoutes.root,
        icon: 'fa-sort-amount-up',
        text: 'Pedidos'
    },
    {
        url: '/' + AppRoutes.route.path,
        icon: 'fa-route',
        text: 'Detalles de rutas'
    },
    {
        url: '/' + AppRoutes.details.path,
        icon: 'fa-hand-holding-usd',
        text: 'Detalles avanzados'
    },
    {
        url: '/' + AppRoutes.record.path,
        icon: 'fa-history',
        text: 'Historial'
    },
    {
        url: '/' + AppRoutes.users.path,
        icon: 'fa-users',
        text: 'Usuarios'
    },
    {
        url: '/' + AppRoutes.pickups.path,
        icon: 'fa-truck-pickup',
        text: 'Transportes'
    },
];