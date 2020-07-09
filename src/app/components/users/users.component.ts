import { Component, ViewChild, OnInit } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUser } from 'src/app/helpers/dialogs/addusers/addusers.component';
import { DialogUserDetail } from 'src/app/helpers/dialogs/userdetail/userdetail.component';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material';

export interface PeriodicElement {
    position: number;
    name: string;
    vehicle: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    { position: 1, name: 'César Derma', vehicle: '#123456' },
    { position: 2, name: 'Víctor Rodríguez', vehicle: '#123456' },
    { position: 3, name: 'Felipe Fierro', vehicle: '#123456' },
    { position: 4, name: 'Israel Arzate', vehicle: '#123456' },
    { position: 5, name: 'Héctor Tetor', vehicle: '#123456' },
];

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
    displayedColumns: string[] = ['position', 'name', 'vehicle', 'actions'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);

    constructor(public dialog: MatDialog) { }

    @ViewChild(MatSort) sort: MatSort;

    ngOnInit() {
        this.dataSource.sort = this.sort;
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    openDialog(): void {
        this.dialog.open(DialogAddUser);
    }

    openDialogUserDetail(): void {
        this.dialog.open(DialogUserDetail);
    }
}