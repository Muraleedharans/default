import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  product:any;
  d :any[]=[];
  constructor(private http: HttpClient){
  }
  public getData(pageSize: number=10){
      return this.http.get(`http://45.127.101.61:8052/api/v1/products?pagingParameterModel.pageSize=${pageSize}`)
      
  }
} 
