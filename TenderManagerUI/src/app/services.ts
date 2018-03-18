import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Condition } from './models/condition';

import 'rxjs/add/operator/mergeMap';

@Injectable()
export class HyperLedgerService {

    conditionsUrl = 'http://localhost:3000/api/Conditions'

    constructor(private httpClient: HttpClient) {

    }

    public getCondition(): Observable<Condition> {
        return this.httpClient.get<Condition>(this.conditionsUrl + '/1', { headers: this.getHeaders() });
    }

    public deleteCondition(): Observable<Object> {
        return this.httpClient.delete(this.conditionsUrl + '/1');
    }

    public saveCondition(conditon: Condition, currentCondition): Observable<Condition> {
        if (currentCondition) {
            return this.deleteCondition()
                .flatMap(v => this.httpClient
                    .post<Condition>(this.conditionsUrl, conditon, { headers: this.getHeaders() }));
        } else {
            return this.httpClient.post<Condition>(this.conditionsUrl, conditon, { headers: this.getHeaders() });
        }
    }

    getHeaders() {
        const headers = new HttpHeaders();
        return headers.set('Content-Type', 'application/json');
    }
}
