import { Component, ViewChild, OnInit } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPickup } from 'src/app/helpers/dialogs/addpickup/addpickup.component';
import { DialogUserDetail } from 'src/app/helpers/dialogs/userdetail/userdetail.component';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material';

export interface PeriodicElement {
    position: number;
    name: string;
    number: number;
    color: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    { position: 1, name: 'Vehículo #1', number: 123456, color: 'Blanco' },
    { position: 2, name: 'Vehículo #2', number: 123456, color: 'Rojo' },
    { position: 3, name: 'Vehículo #3', number: 123456, color: 'Azul' },
    { position: 4, name: 'Vehículo #4', number: 123456, color: 'Cafe' },
    { position: 5, name: 'Vehículo #5', number: 123456, color: 'Blanco' },
    { position: 6, name: 'Vehículo #6', number: 123456, color: 'Rojo' },
    { position: 7, name: 'Vehículo #7', number: 123456, color: 'Azul' },
];

@Component({
    selector: 'app-pickups',
    templateUrl: './pickups.component.html',
    styleUrls: ['./pickups.component.scss']
})
export class PickupsComponent implements OnInit {
    displayedColumns: string[] = ['position', 'name', 'number', 'color', 'actions'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);

    constructor(public dialog: MatDialog) {}

    @ViewChild(MatSort) sort: MatSort;

    ngOnInit() {
        this.dataSource.sort = this.sort;
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    openDialog(): void {
        this.dialog.open(DialogAddPickup);
    }

    openDialogUserDetail(): void {
        this.dialog.open(DialogUserDetail);
    }
}