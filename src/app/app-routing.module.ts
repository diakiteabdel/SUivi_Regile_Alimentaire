import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JournalAlimentaireComponent } from './journal-alimentaire/journal-alimentaire.component';
import { BrowserModule } from '@angular/platform-browser';
import { PlanificationRepasComponent } from './planification-repas/planification-repas.component';
import { AppComponent } from './app.component';
import { SuiviObjectifsComponent } from './suivi-objectifs/suivi-objectifs.component';

//définition des routes
const routes: Routes = [{ path: '', redirectTo: '/journal', pathMatch: 'full'}, //Redirection par defaut vers le JOURNAL ALIMENTAIRE
{ path: 'journal', component: JournalAlimentaireComponent},
{ path: 'planification', component: PlanificationRepasComponent},
{ path: 'suivi', component: SuiviObjectifsComponent},
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [RouterModule.forRoot(routes), BrowserModule],
  exports: [RouterModule],

  providers: [],
  //bootstrap: [AppComponent]
})
export class AppRoutingModule { }
