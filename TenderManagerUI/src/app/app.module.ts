import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { OfferListComponent } from './offer-list/offer-list.component';


@NgModule({
  declarations: [
    AppComponent,
    OfferListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'offer-list', component: OfferListComponent },
      { path: '', component: OfferListComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
