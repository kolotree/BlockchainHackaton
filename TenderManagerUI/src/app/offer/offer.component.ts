import { Component, OnInit } from '@angular/core';
import { Offer } from "../models/offer";
import { HyperLedgerService } from "../services";

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  offers: Offer[];
  offer1: Offer;
  offer2: Offer;
  offer3: Offer;

  constructor(private service: HyperLedgerService) { }

  ngOnInit() {
    this.offer1 = this.createOffer1();
    this.offer2 = this.createOffer2();
    this.offer3 = this.createOffer3();
  }

  createOffer1(): Offer {
    const offer1 = new Offer();
    offer1.$class = "org.example.biznet.SubmitOffer"
    offer1.offerId = '1';
    offer1.encryptedDescription = "Moja ponuda je 300 evra";
    offer1.participient = "resource:org.example.biznet.Participient#1"
    return offer1;
  }

  saveOffer1() {
    this.service.saveOffer(this.offer1).subscribe(data => {
      this.offers.push(this.offer1);
    });
  }

  createOffer2(): Offer {
    const offer1 = new Offer();
    offer1.$class = "org.example.biznet.SubmitOffer"
    offer1.offerId = '2';
    offer1.encryptedDescription = "Moja ponuda je 7000 evra";
    offer1.participient = "resource:org.example.biznet.Participient#2"
    return offer1;
  }

  saveOffer2() {
    this.service.saveOffer(this.offer2).subscribe(data => {
      this.offers.push(this.offer2);
    });
  }

  createOffer3(): Offer {
    const offer1 = new Offer();
    offer1.$class = "org.example.biznet.SubmitOffer"
    offer1.offerId = '3';
    offer1.encryptedDescription = "Moja ponuda je 3000 evra";
    offer1.participient = "resource:org.example.biznet.Participient#3"
    return offer1;
  }

  saveOffer3() {
    this.service.saveOffer(this.offer3).subscribe(data => {
      this.offers.push(this.offer3);
    });
  }

  deleteOffers() {
    this.offers = new Array();
    this.service.deleteOffers();
  }

}
