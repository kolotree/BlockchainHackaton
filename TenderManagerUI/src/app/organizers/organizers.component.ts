import { Component, OnInit } from '@angular/core';
import { Organizer } from './organizer.model';
import { OrganizerService } from './organizer.service';

@Component({
  selector: 'app-organizers',
  templateUrl: './organizers.component.html',
  styleUrls: ['./organizers.component.css']
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
