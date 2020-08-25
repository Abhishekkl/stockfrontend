import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ChartComponent } from './chart/chart.component';
// import stock from 'highcharts/modules/stock.src';
// import more from 'highcharts/highcharts-more.src';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import { StockchartComponent } from './stockchart/stockchart.component';
import { ChartsModule } from 'ng2-charts';
import { CompanyComponent } from './company/company.component';
// export function highchartsModules() {
//   // apply Highcharts Modules to this array
//   return [stock, more];
// }

@NgModule({
  declarations: [
    AppComponent,
    StockchartComponent,
    CompanyComponent
  ],
  imports: [
    ChartsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
