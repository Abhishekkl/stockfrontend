import { Component, OnInit } from '@angular/core'; 
import { Chart } from 'angular-highcharts';
import { StockChart } from 'angular-highcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  stock: StockChart;

  // data = [1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1];
  // chart = new Chart({
  //   chart: {
  //     type: 'area'
  //   },
  //   title: {
  //     text: 'ASIANPAINTS'
  //   },
  //   subtitle: {
  //     text: 'A STOCK SIMULATION'
  //   },
  //   series: [{
  //     name: 'ASIANPAINTS',
  //     data: [1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1]
  //   }]
  // });
  constructor() { }

  ngOnInit(): void {
    this.stock = new StockChart({
      rangeSelector:{
        selected : 1
      },
      title: {
        text : 'Text Price'
      },
      series: [{
        tooltip: {
          valueDecimals: 2
        },
        name: 'AAPL',
        data: [
          [1293580800000, 46.47],
          [1293667200000, 46.24],
          [1293753600000, 46.08],
        ]
      }]
    })
    // this.chart.addPoint(1)
  }


}
