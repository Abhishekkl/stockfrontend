import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private messageSource = new BehaviorSubject([]);
  currentTickData = this.messageSource.asObservable();

  constructor(private http: HttpClient) { }

  changeTickData(message) {
    this.messageSource.next(message)
  }

  getCompanytickdata(company){
    return this.http.get<any>(`http://localhost:8000/gettickdata/${company}`)
  }

  getCompany(){
    return this.http.get<any>('http://localhost:8000/getdata')
  }

  getAllTickData(){
    return this.http.get<any>(`http://localhost:8000/getalltickdata`)
  }

  getNgainerslosers(){
    return this.http.get<any>(`http://localhost:8000/getNgainerandloser`)
  }

}
