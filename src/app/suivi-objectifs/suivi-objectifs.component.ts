import { Component, OnInit } from '@angular/core';
import { ObjectifService } from '../services/objectif.service';
import { RepasService } from '../services/repas.service';

@Component({
  selector: 'app-suivi-objectifs',
  templateUrl: './suivi-objectifs.component.html',
  styleUrls: ['./suivi-objectifs.component.css']
})
export class SuiviObjectifsComponent implements OnInit{
   objectifCalorique: number = 0;
   caloriesConsommees: number = 0;
   progression: number = 0;

   constructor(
    private objectifService: ObjectifService,
    private repasService: RepasService
   ){}

  ngOnInit(): void {
      this.objectifCalorique = this.objectifService.getObjectifCalorique();
      this.caloriesConsommees = this.calculateTotalCalories();
      this.progression = (this.caloriesConsommees / this.objectifCalorique) * 100;
  }

  private calculateTotalCalories(): number {
    const repasConsommes = this.repasService.getRepasConsommes();
    let totalCalories = 0;
    for (const repas of repasConsommes) {
      if (repas.consomme) {
        totalCalories += repas.calories;
      }
    }
    return totalCalories;
  }
}
