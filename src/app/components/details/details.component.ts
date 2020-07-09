import { Component } from "@angular/core";
import { Label } from 'ng2-charts';
import { ChartType, ChartDataSets } from 'chart.js';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
    public barChartLabels: Label[] = ['8:00am', '9:00am', '10:00am', '11:00am', '12:00am'];
    public barChartType: ChartType = 'line';
    public barChartLegend = false;

    public barChartData: ChartDataSets[] = [
        { data: [65, 59, 80, 81, 56], label: 'César Derma' },
        { data: [28, 48, 40, 19, 86], label: 'Felipe Fierro' },
        { data: [12, 29, 100, 42, 12], label: 'Víctor Rodríguez' },
        { data: [53, 27, 86, 95, 30], label: 'Israel Arzate' }
    ];
}