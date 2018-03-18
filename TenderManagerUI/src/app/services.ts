import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Condition } from './models/condition';

import 'rxjs/add/operator/mergeMap';
import { Offer } from "./models/offer";
import { DiscloseOffer } from "./models/discloseoffer";

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

    public saveOffer(offer: any): Observable<Offer>{
        const url = 'http://localhost:3000/api/SubmitOffer';
        return this.httpClient.post<Offer>(url, offer, { headers: this.getHeaders()});
    }

    public discloseOffer(discloseOffer: any): Observable<DiscloseOffer>{
        const url = 'http://localhost:3000/api/DiscloseOffer';
        return this.httpClient.post<DiscloseOffer>(url, discloseOffer, { headers: this.getHeaders()});
    }

    public deleteOffers() {
        const url = 'http://localhost:3000/api/Offer';
        this.httpClient.delete(url + '/1', { headers: this.getHeaders()}).subscribe();
        this.httpClient.delete(url + '/2', { headers: this.getHeaders()}).subscribe();
        this.httpClient.delete(url + '/3', { headers: this.getHeaders()}).subscribe();
    }

    getHeaders() {
        const headers = new HttpHeaders();
        return headers.set('Content-Type', 'application/json');
    }
}
