import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { OfferListComponent } from './offer-list/offer-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConditionsComponent } from './conditions/conditions.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    OfferListComponent,
    ConditionsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
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
