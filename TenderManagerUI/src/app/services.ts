import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import { Condition } from "./models/condition";

import 'rxjs/add/operator/mergeMap';

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
        // return this.httpClient.post(conditionsUrl, conditon, { headers: this.getHeaders()});
        
        return this.deleteCondition()
                   .flatMap(v => this.httpClient
                                     .post(conditionsUrl, conditon, { headers: this.getHeaders()}));
    }

    getHeaders() {
        const headers = new HttpHeaders();
        return headers.set('Content-Type', 'application/json');
    }
}