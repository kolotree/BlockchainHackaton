import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.css']
})
export class ConditionsComponent implements OnInit {

  conditionForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.conditionForm = this.fb.group(
      {
        openedForOffersTimestamp: '',
        closedForOffersTimestamp: '',
        tenderFinishedTimestamp: ''
      }
    );
  }

  onSubmit() {
    const formModel = this.conditionForm.value;
    formModel.conditionsId = '1';
    formModel.description = 'Tender description';
    formModel.organizer = 'resource:org.example.biznet.Organizer#1'
    formModel.$class = 'org.example.biznet.Conditions',
    console.log(formModel);
  }

}
