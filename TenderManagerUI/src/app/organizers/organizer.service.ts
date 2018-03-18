import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Organizer } from './organizer.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OrganizerService {

    constructor(private httpClient: HttpClient) {

    }

    public getAllOrganizers(): Observable<Array<Organizer>> {
        const organizerUrl = 'http://localhost:3000/api/Organizer';
        return this.httpClient.get<Organizer[]>(organizerUrl, { headers: this.getHeaders()});
    }

    getHeaders() {
        const headers = new HttpHeaders();
        return headers.set('Content-Type', 'application/json');
    }
}
