import { Component, OnInit } from '@angular/core';
import { Offer } from "../models/offer";
import { HyperLedgerService } from "../services";
import { Encryption } from "../helpers/encryption";
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';


@Component({
  selector: 'app-tender-overview',
  templateUrl: './tender-overview.component.html',
  styleUrls: ['./tender-overview.component.css'],
  animations: [
    trigger('flyIn', [
        state('in', style({opacity: 1}), {params: {delay: 0}}),
        transition('void => *', [
          style({
            opacity: 0
          }),
          animate('0.7s ease-in')
        ])
    ])
  ]
})
export class TenderOverviewComponent implements OnInit {

  offers: Offer[];

  constructor(private service: HyperLedgerService) { }

  ngOnInit() {
    this.service.getAllOffers().subscribe(data => {
      this.offers = data;
    });
  }

  getDecriptedData(offer: Offer): string {
    return Encryption.decryptData(offer.encryptedDescription, offer.privateKey);
  }

}
