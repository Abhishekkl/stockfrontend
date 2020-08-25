import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { CommonService } from "../common.service";
@Component({
  selector: 'app-stockchart',
  templateUrl: './stockchart.component.html',
  styleUrls: ['./stockchart.component.css']
})
export class StockchartComponent implements OnInit {
  tickdata;
  public lineChartData: ChartDataSets[] = [
    { data: [], label: '' },
  ];
  public lineChartLabels: Label[] = [];
  
  public lineChartOptions: (ChartOptions) = {
    responsive: false,
  };

  public lineChartColors: Color[] = [
    {
      borderColor: 'red',
      backgroundColor: 'rgba(164,229,244,0.5)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor(private commonService : CommonService) { }

  ngOnInit(): void {
    this.commonService.currentTickData.subscribe(data=>{
      this.tickdata = data;
      // console.log("STOCK",this.tickdata)
      console.log(this.tickdata)
      this.lineChartData = [
        { data: this.tickdata.tickdatavalue, label: this.tickdata.company },
      ]
      this.lineChartLabels = this.tickdata.tickdatalabel
    })
  }

}
