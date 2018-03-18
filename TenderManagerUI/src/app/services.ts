import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import { Condition } from "./models/condition";

import 'rxjs/add/operator/mergeMap';
import { Offer } from "./models/offer";

@Injectable()
export class HyperLedgerService {

    constructor(private httpClient: HttpClient) {

    }

    public getCondition(): Observable<Condition> {
        const conditionsUrl = 'http://localhost:3000/api/Conditions/1';
        return this.httpClient.get<Condition>(conditionsUrl, { headers: this.getHeaders()});
    }

    public deleteCondition(): Observable<Object> {
        const conditionsUrl = 'http://localhost:3000/api/Conditions';
        return this.httpClient.delete(conditionsUrl + '/1');
    }

    public saveCondition(conditon: any): Observable<Object>{
        const conditionsUrl = 'http://localhost:3000/api/Conditions';
        return this.deleteCondition()
                   .flatMap(v => this.httpClient
                                     .post(conditionsUrl, conditon, { headers: this.getHeaders()}));
    }

    public saveOffer(offer: any): Observable<Offer>{
        const url = 'http://localhost:3000/api/SubmitOffer';
        return this.httpClient.post<Offer>(url, offer, { headers: this.getHeaders()});
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