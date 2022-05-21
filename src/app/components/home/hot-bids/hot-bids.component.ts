import { Component, OnInit } from '@angular/core';
import { hotBids } from 'src/app/modals/hot-bids.modal';
import { HotBid } from 'src/app/types/hot-bid';

@Component({
  selector: 'app-hot-bids',
  templateUrl: './hot-bids.component.html',
  styleUrls: ['./hot-bids.component.scss']
})
export class HotBidsComponent implements OnInit {
  public hotBids: Array<HotBid> = hotBids;
  constructor() { }

  ngOnInit(): void {
  }

}
