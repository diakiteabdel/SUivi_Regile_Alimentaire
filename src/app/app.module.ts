import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JournalAlimentaireComponent } from './journal-alimentaire/journal-alimentaire.component';
import { PlanificationRepasComponent } from './planification-repas/planification-repas.component';
import { SuiviObjectifsComponent } from './suivi-objectifs/suivi-objectifs.component';

@NgModule({
  declarations: [
    //AppComponent,
    JournalAlimentaireComponent,
    PlanificationRepasComponent,
    SuiviObjectifsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
