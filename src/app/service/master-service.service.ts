import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterServiceService {

  
  constructor() { }

  private rowDataSource = new Subject<any>();
  rowData$ = this.rowDataSource.asObservable();

  sendRowData(data:any){
    this.rowDataSource.next(data);
  }

}
