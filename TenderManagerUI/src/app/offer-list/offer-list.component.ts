import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.css'],
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
export class OfferListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
