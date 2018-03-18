import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Participant } from './participant.model';

@Injectable()
export class ParticipantService {

    participantUrl = 'http://localhost:3000/api/Participient';

    constructor(private httpClient: HttpClient) {

    }

    public getAllParticipants(): Observable<Array<Participant>> {
        return this.httpClient.get<Participant[]>(this.participantUrl, { headers: this.getHeaders()});
    }

    public saveParticipant(participant: Participant): Observable<Participant> {
        return this.httpClient.post<Participant>(this.participantUrl, participant, {headers: this.getHeaders()});
    }

    public deletePartipant(participantId: String) {
        return this.httpClient.delete(this.participantUrl + '/' + participantId);
    }

    getHeaders() {
        const headers = new HttpHeaders();
        return headers.set('Content-Type', 'application/json');
    }
}
