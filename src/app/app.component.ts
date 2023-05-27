import { Component } from '@angular/core';
import { ApiService } from './api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dataSource: any;
  toData: number;
  fromData: number;
  selectedOption: string = 'id';
  searchData: string = "";
  options = [
    { value: 'id', label: 'Id' },
    { value: 'totalMarks', label: 'Total Marks' },
    { value: 'age', label: 'Age' },
  ];

  constructor(private api: ApiService) {

  }
  ngOnInit() {
    this.api.getData().subscribe(res => {
      this.dataSource = res;
    })

  }
  getdataFilter() {
    if (this.toData !=null && this.fromData !=null) {
      this.api.getdataFilter(this.toData, this.fromData, this.selectedOption).subscribe(res => {
        this.dataSource = res;
      })
    }
    else {
      alert("Please fill the box")
    }
  }
  getBySearch() {
    this.toData = null;
    this.fromData = null;
    this.api.getBySearch(this.searchData).subscribe(res => {
      this.dataSource = res
    })
  }
}
