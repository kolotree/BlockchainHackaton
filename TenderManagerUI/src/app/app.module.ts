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

@NgModule({
  declarations: [
    AppComponent,
    ConditionsComponent,
    OrganizersComponent,
    OfferComponent,
    ParticipantsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'organizers', component: OrganizersComponent },
      { path: '', component: OrganizersComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ])
  ],
  providers: [OrganizerService, ParticipantService, HyperLedgerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
