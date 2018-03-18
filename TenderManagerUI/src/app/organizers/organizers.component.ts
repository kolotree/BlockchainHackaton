import { Component, OnInit } from '@angular/core';
import { Organizer } from './organizer.model';
import { OrganizerService } from './organizer.service';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-organizers',
  templateUrl: './organizers.component.html',
  styleUrls: ['./organizers.component.css'],
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
export class OrganizersComponent implements OnInit {

  organizers: Array<Organizer>;

  constructor(private organizerService: OrganizerService) { }

  ngOnInit() {
    this.organizerService.getAllOrganizers().subscribe(
      data => {
        this.organizers = data;
        console.log(this.organizers);
      }
        ,
      error => console.log(error)
    );
  }

}
