import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConditionsComponent } from './conditions/conditions.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OrganizersComponent } from './organizers/organizers.component';
import { OrganizerService } from './organizers/organizer.service';
import { ParticipantService } from './participants/participant.service';
import { HttpClientModule } from '@angular/common/http';
import { HyperLedgerService } from "./services";
import { OfferComponent } from './offer/offer.component';
import { ParticipantsComponent } from './participants/participants.component';
import { TenderOverviewComponent } from './tender-overview/tender-overview.component';
import { HomeComponent } from './home/home.component';
import { Encryption } from "./helpers/encryption";

@NgModule({
  declarations: [
    AppComponent,
    ConditionsComponent,
    OrganizersComponent,
    OfferComponent,
    ParticipantsComponent,
    TenderOverviewComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'overview', component: TenderOverviewComponent},
      { path: 'organizers', component: OrganizersComponent },
      { path: '', component: HomeComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ])
  ],
  providers: [OrganizerService, ParticipantService, HyperLedgerService, Encryption],
  bootstrap: [AppComponent]
})
export class AppModule { }
