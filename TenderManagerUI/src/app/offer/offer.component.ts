import { Component, OnInit } from '@angular/core';
import { Offer } from "../models/offer";
import { HyperLedgerService } from "../services";
import { DiscloseOffer } from "../models/discloseoffer";
import { Encryption } from "../helpers/encryption";


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
  offer1PrivateKey = 'sahdiuhqwid';

  offer2: Offer;
  offer2SubmitError = null;
  offer2SubmitMessage = null;
  offer2PrivateKey = 'wqy9yd2198dhwd';

  offer3: Offer;
  offer3SubmitError = null;
  offer3SubmitMessage = null;
  offer3PrivateKey = 'lasdoh19hdhaskjd';

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
    offer1.encryptedDescription = Encryption.encryptData("Moja ponuda je 300 evra",
                                  this.offer1PrivateKey);
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
    offer1.encryptedDescription = Encryption.encryptData("Moja ponuda je 7000 evra",
                                  this.offer2PrivateKey);
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
    offer1.encryptedDescription = Encryption.encryptData("Moja ponuda je 3000 evra",
                                  this.offer3PrivateKey);
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
    discloseOffer.privateKey = this.offer1PrivateKey;
    this.service.discloseOffer(discloseOffer).subscribe(data => {
      this.offer1.privateKey = data.privateKey;
      this.offer1SubmitError = null;
      this.offer1SubmitMessage = "Decryption key accepted";
      this.offer1.decryptedDescription = Encryption.decryptData(this.offer1.encryptedDescription,
                                                          this.offer1PrivateKey);
    }, error => {
      this.offer1SubmitError = 'Submiting period expired. Decryption key rejected!';
      this.offer1SubmitMessage = null;
    });
  }

  discloseOffer2(){
    const discloseOffer = new DiscloseOffer();
    discloseOffer.offer = 'resource:org.example.biznet.Offer#2';
    discloseOffer.privateKey = this.offer2PrivateKey;
    this.service.discloseOffer(discloseOffer).subscribe(data => {
      this.offer2.privateKey = data.privateKey;
      this.offer2SubmitError = null;
      this.offer2SubmitMessage = "Decryption key accepted";
      this.offer2.decryptedDescription = Encryption.decryptData(this.offer2.encryptedDescription,
                                                          this.offer2PrivateKey);
    }, error => {
      this.offer2SubmitError = 'Submiting period expired. Decryption key rejected!';
      this.offer2SubmitMessage = null;
    });
  }

  discloseOffer3(){
    const discloseOffer = new DiscloseOffer();
    discloseOffer.offer = 'resource:org.example.biznet.Offer#3';
    discloseOffer.privateKey = this.offer3PrivateKey;
    this.service.discloseOffer(discloseOffer).subscribe(data => {
      this.offer3.privateKey = data.privateKey;
      this.offer3SubmitError = null;
      this.offer3SubmitMessage = "Decryption key accepted";
      this.offer3.decryptedDescription = Encryption.decryptData(this.offer3.encryptedDescription,
                                                          this.offer3PrivateKey);
    }, error => {
      this.offer3SubmitError = 'Submiting period expired. Decryption key rejected!';
      this.offer3SubmitMessage = null;
    });
  }

}
