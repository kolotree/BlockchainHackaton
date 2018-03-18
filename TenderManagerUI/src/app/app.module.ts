import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { OfferListComponent } from './offer-list/offer-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrganizersComponent } from './organizers/organizers.component';
import { OrganizerService } from './organizers/organizer.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    OfferListComponent,
    OrganizersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'offer-list', component: OfferListComponent },
      { path: '', component: OfferListComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ])
  ],
  providers: [OrganizerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
