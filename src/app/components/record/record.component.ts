import { Component, ViewChild } from "@angular/core";
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface OrdersData {
    order_id: number;
    day: any;
}

const ORDERS_DATA: OrdersData[] = [
    { order_id: 1, day: '00/00/0000' },
    { order_id: 2, day: '00/00/0000' },
    { order_id: 3, day: '00/00/0000' },
    { order_id: 4, day: '00/00/0000' },
    { order_id: 5, day: '00/00/0000' },
    { order_id: 6, day: '00/00/0000' },
    { order_id: 7, day: '00/00/0000' },
];

@Component({
    selector: 'app-record',
    templateUrl: './record.component.html',
    styleUrls: ['./record.component.scss']
})
export class RecordComponent {
    displayedColumns: string[] = ['order_id', 'day', 'address'];
    dataSource = new MatTableDataSource(ORDERS_DATA);

    @ViewChild(MatSort) sort: MatSort;

    ngOnInit() {
        this.dataSource.sort = this.sort;
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}