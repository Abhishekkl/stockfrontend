import { Component, OnInit } from '@angular/core';
import { CommonService } from "../common.service";
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  companies = []
  tickdata;
  length;
  topGainers;
  topLosers;
  constructor(private commonService : CommonService) { }

  ngOnInit(): void {
    this.commonService.getAllTickData()
    .subscribe((data)=>{
      console.log(data)
      this.tickdata = data;
      this.length = this.tickdata[0].tickdata.length-1
      console.log(this.tickdata[0].tickdata[this.length].value)
    })
    this.commonService.getCompany()
    .subscribe((data)=>{
      console.log(data)
      this.companies = data;
    })
    this.commonService.getNgainerslosers()
    .subscribe(data=>{
      console.log(data)
      this.topGainers = data.first;
      this.topLosers = data.last;
    })
  }

  onCompClick(company){
    this.commonService.getCompanytickdata(company)
    .subscribe(data=>{
      console.log(data)
      this.commonService.changeTickData(data)
    })
  }

}
