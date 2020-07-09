import { Component, ViewChild, OnInit } from "@angular/core";
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material';

export interface OrdersData {
    name: string;
    order_id: number;
    phone: any;
    address: string;
}

const ORDERS_DATA: OrdersData[] = [
    { order_id: 1, name: 'Lorena Garrett', phone: '7226545443', address: '4 Amerige Court Painesville, OH 44077' },
    { order_id: 2, name: 'Nial Portillo', phone: '2924175279', address: '485 East Lake Forest Ave. Florence, SC 29501' },
    { order_id: 3, name: 'Jaye Bowler', phone: '2376023500', address: '8395 Johnson Drive Harrisburg, PA 17109' },
    { order_id: 4, name: 'Atticus Silva', phone: '2349306124', address: '456 E. Cedarwood Rd. Caldwell, NJ 07006' },
    { order_id: 5, name: 'Brenda Klein', phone: '8473087292', address: '27 E. Rocky River Rd. Winchester, VA 22601' },
    { order_id: 6, name: 'Phillipa Akhtar', phone: '5448223604', address: '966 Old Pacific Street Lake Mary, FL 32746' },
    { order_id: 7, name: 'Beulah Parks', phone: '2986658010', address: '99 E. Glenridge Court Mount Vernon, NY 10550' },
    { order_id: 8, name: 'Bradley Mcleod', phone: '7059207370', address: '893 Jackson Lane Chattanooga, TN 37421' },
    { order_id: 9, name: 'Bushra Mccarty', phone: '6229058144', address: '61 Dunbar Dr. Hackettstown, NJ 07840' },
    { order_id: 10, name: 'Manav Mcdermott', phone: '8162973025', address: '533 Cambridge Ave. Fargo, ND 58102' },
];

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    displayedColumns: string[] = ['order_id', 'name', 'phone', 'address'];
    dataSource = new MatTableDataSource(ORDERS_DATA);

    @ViewChild(MatSort) sort: MatSort;

    ngOnInit() {
        this.dataSource.sort = this.sort;
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}