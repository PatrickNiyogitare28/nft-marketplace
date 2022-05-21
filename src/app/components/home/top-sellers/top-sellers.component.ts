import { Component, OnInit } from '@angular/core';
import { topSellers } from 'src/app/modals/top-sellers.modal';
import { TopSeller } from 'src/app/types/top-seller';

@Component({
  selector: 'app-top-sellers',
  templateUrl: './top-sellers.component.html',
  styleUrls: ['./top-sellers.component.scss']
})
export class TopSellersComponent implements OnInit {
  public readonly sellers: Array<TopSeller> = topSellers;
  constructor() { }

  ngOnInit(): void {
  }

}
