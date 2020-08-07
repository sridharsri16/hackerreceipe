import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-hackerrecipedetails',
  templateUrl: './hackerrecipedetails.component.html',
  styleUrls: ['./hackerrecipedetails.component.css']
})
export class HackerrecipedetailsComponent implements OnInit {
  @Output() value = new EventEmitter<boolean>();
  clicked: boolean;
  id: any;
  subscribedData: any;
  listData: any;
  curretrecipe: any;
  splitdata: string[];

  constructor(private _avRoute: ActivatedRoute, private router: Router, public _service: CommonService, ) {
    debugger
    if (this._avRoute.snapshot.params["id"]) {
      this.id = this._avRoute.snapshot.params["id"];
    }
  }

  ngOnInit() {
    this.subscribedData = this._service.getList('recipe').subscribe(
      (response) => {
        debugger;
        this.splitdata = document.location.pathname.split('/');
        console.log(this.splitdata)
        this.id = this.router
        this.listData = response;

        this.curretrecipe = this.listData.filter(
          data => data.id === Number(this.splitdata[2]));
        console.log(this.curretrecipe)
      }, (error) => {

      })

  }

  back() {
    this.value.emit(false);
  }

  ngOnDestroy() {
    this.subscribedData.unsubscribe();
  }
}
