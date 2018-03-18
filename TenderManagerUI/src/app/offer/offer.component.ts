import { Component, OnInit } from '@angular/core';
import { Offer } from "../models/offer";
import { HyperLedgerService } from "../services";
import { DiscloseOffer } from "../models/discloseoffer";

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  offers: Offer[];
  offer1: Offer;
  offer1SubmitError = null;
  offer1SubmitMessage = null;
  offer2: Offer;
  offer2SubmitError = null;
  offer2SubmitMessage = null;
  offer3: Offer;
  offer3SubmitError = null;
  offer3SubmitMessage = null;

  constructor(private service: HyperLedgerService) { }

  ngOnInit() {
    this.offer1 = this.createOffer1();
    this.offer2 = this.createOffer2();
    this.offer3 = this.createOffer3();
    this.deleteOffers();
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
      this.offer1SubmitError = null;
      this.offer1SubmitMessage = "Offer accepted";
      this.offers.push(this.offer1);      
    }, error => {
      this.offer1SubmitError = 'Submiting period expired. Offer rejected!';
      this.offer1SubmitMessage = null;
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
      this.offer2SubmitError = null;
      this.offer2SubmitMessage = "Offer accepted";
      this.offers.push(this.offer2);
    }, error => {
      this.offer2SubmitError = 'Submiting period expired. Offer rejected!';
      this.offer2SubmitMessage = null;
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
      this.offer3SubmitError = null;
      this.offer3SubmitMessage = "Offer accepted";
      this.offers.push(this.offer3);
    }, error => {
      this.offer3SubmitError = 'Submiting period expired. Offer rejected!';
      this.offer3SubmitMessage = null;
    });
  }

  deleteOffers() {
    this.offers = new Array();
    this.service.deleteOffers();
  }

  discloseOffer1(){
    const discloseOffer = new DiscloseOffer();
    discloseOffer.offer = 'resource:org.example.biznet.Offer#1';
    discloseOffer.privateKey = 'DSA@!#SDASDQWDQWSDZC@$@!#12312321das';
    this.service.discloseOffer(discloseOffer).subscribe(data => {
      this.offer1.privateKey = data.privateKey;
      this.offer1SubmitError = null;
      this.offer1SubmitMessage = "Decryption key accepted";
    }, error => {
      this.offer1SubmitError = 'Submiting period expired. Decryption key rejected!';
      this.offer1SubmitMessage = null;
    });
  }

  discloseOffer2(){
    const discloseOffer = new DiscloseOffer();
    discloseOffer.offer = 'resource:org.example.biznet.Offer#2';
    discloseOffer.privateKey = 'DSA@!#SDASDQWDQWSDZC@$@!#12312321das';
    this.service.discloseOffer(discloseOffer).subscribe(data => {
      this.offer2.privateKey = data.privateKey;
      this.offer2SubmitError = null;
      this.offer2SubmitMessage = "Decryption key accepted";
    }, error => {
      this.offer2SubmitError = 'Submiting period expired. Decryption key rejected!';
      this.offer2SubmitMessage = null;
    });
  }

  discloseOffer3(){
    const discloseOffer = new DiscloseOffer();
    discloseOffer.offer = 'resource:org.example.biznet.Offer#3';
    discloseOffer.privateKey = 'DSA@!#SDASDQWDQWSDZC@$@!#12312321das';
    this.service.discloseOffer(discloseOffer).subscribe(data => {
      this.offer3.privateKey = data.privateKey;
      this.offer3SubmitError = null;
      this.offer3SubmitMessage = "Decryption key accepted";
    }, error => {
      this.offer3SubmitError = 'Submiting period expired. Decryption key rejected!';
      this.offer3SubmitMessage = null;
    });
  }

}
