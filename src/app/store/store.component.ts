import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Store, StoreService} from "../services/store-service";

@Component({
  selector: 'app-movie',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  public movie: Store;

  constructor(private storeService: StoreService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  pay() {
    this.storeService.variablePay(this.movie)
      .subscribe(data => {
      });
    this.callCenterPay();
  }

  callCenterPay() {
    this.storeService.centerPay(this.movie)
      .subscribe(data => {
      });
  }


}
