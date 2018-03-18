import { Injectable } from "@angular/core/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class HyperLedgerService {

    constructor(private httpClient: HttpClient) {

    }

    public getCondition(): Observable<any> {
        const conditionsUrl = 'http://localhost:3000/api/Conditions/1';
        return this.httpClient.get(conditionsUrl, { headers: this.getHeaders()});
    }

    public saveCondition(conditon: any): Observable<Object> {
        const conditionsUrl = 'http://localhost:3000/api/Conditions';
        return this.httpClient.delete(conditionsUrl + '/1').pipe(complete => {
            return this.httpClient.post(conditionsUrl, conditon, { headers: this.getHeaders()});
        })
    }

    getHeaders() {
        const headers = new HttpHeaders();
        return headers.set('Content-Type', 'application/json');
    }
}