import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { HyperLedgerService } from '../services';
import { Condition } from '../models/condition';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.css'],
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
export class ConditionsComponent implements OnInit {

  conditionForm: FormGroup;
  currentCondition: Condition;

  constructor(private fb: FormBuilder,
              private service: HyperLedgerService) { }

  ngOnInit() {

    this.service.getCondition().subscribe(data => {
      this.currentCondition = data;
      console.log(data);
    });

    this.conditionForm = this.fb.group(
      {
      }
    );
  }

  onSubmit() {
    const formModel = this.conditionForm.value;
    const now = new Date();
    formModel.openedForOffersTimestamp = now;
    formModel.closedForOffersTimestamp = new Date(now.getTime() + 30 * 1000);
    formModel.tenderFinishedTimestamp = new Date(now.getTime() + 60 * 1000);
    formModel.conditionsId = '1';
    formModel.description = 'Tender description';
    formModel.organizer = 'resource:org.example.biznet.Organizer#1';
    formModel.$class = 'org.example.biznet.Conditions',
    console.log(formModel);
    this.service.saveCondition(formModel).subscribe(data => {
      this.currentCondition = data;
    });
  }

}
