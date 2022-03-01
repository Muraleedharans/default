import { SearchService } from './../search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  product:any;
  d :any[]=[];

  constructor(private SearchService: SearchService){
    this.SearchService.getData().subscribe(data=> this.product=data); 
  }

  suggest() {
    this.d=[];
    for (let i=0;i<this.product.Data.length;i++){
      this.d.push(this.product.Data[i]['ProductName']);
    }
  }

  ngOnInit(): void {
  }

}
