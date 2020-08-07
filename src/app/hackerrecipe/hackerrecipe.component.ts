import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hackerrecipe',
  templateUrl: './hackerrecipe.component.html',
  styleUrls: ['./hackerrecipe.component.css']
})
export class HackerrecipeComponent implements OnInit {
  subscribedData: any;
  listData: any;
  clicked: boolean = false;
  currentrecipe: any;

  constructor(public _service: CommonService, private _router: Router, ) { }

  ngOnInit() {
    this.subscribedData = this._service.getList('recipe').subscribe(
      (response) => {
        debugger;
        this.listData = response;
        console.log(this.listData)
      }, (error) => {

      })
  }

  transferid(id) {
    debugger
    this.clicked = true;
    if (id == null || id == "" || id == undefined) {
    }
    else {
      this._router.navigate(['/hackerrecepiedetails/', id]);
    }
  }

  valuefromchild(fromchlid) {
    this.clicked = fromchlid
  }

  Search() {
    debugger
    var element = document.getElementById('search')['value'];
    if (element != "") {
      this.currentrecipe = this.listData.filter(
        data => data.name.toLowerCase() === element.toLowerCase());
      this.listData = this.currentrecipe;
    } else {
      this.ngOnInit();
    }
  }

  ngOnDestroy() {
    this.subscribedData.unsubscribe();

  }
}
