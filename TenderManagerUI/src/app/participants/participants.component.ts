import { Component, OnInit } from '@angular/core';
import { Participant } from './participant.model';
import { ParticipantService } from './participant.service';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css'],
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
export class ParticipantsComponent implements OnInit {

  participants: Array<Participant> = new Array<Participant>();
  addedParticipants: Array<String> = new Array<String>();

  constructor(private participantService: ParticipantService) { }

  ngOnInit() {
    this.participants.push(new Participant('p1', 'Asus'));
    this.participants.push(new Participant('p2', 'Apple'));
    this.participants.push(new Participant('p3', 'HP'));
  }

  addParticipant(participant: Participant) {
    this.participantService.saveParticipant(participant).subscribe(
      data => {
        console.log(data);
        this.addedParticipants.push(participant.participientId);
      },
      error => console.log(error)
    );
  }

  isDisabled(id: String) {
    return this.addedParticipants.indexOf(id) > -1;
  }

  deleteAll() {
    this.deleteSingle('p1');
    this.deleteSingle('p2');
    this.deleteSingle('p3');
  }

  deleteSingle(id: String) {
    if (this.addedParticipants.indexOf(id) > -1) {
      this.participantService.deletePartipant(id).subscribe(
        data => {
          this.addedParticipants = this.addedParticipants.filter(i => i !== id);
        },
        error => console.log(error)
      );
    }
  }
}
