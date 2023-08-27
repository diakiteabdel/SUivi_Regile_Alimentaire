import { Component,OnInit } from '@angular/core';
import { Repas } from '../models/repas.model';
import { RepasService } from '../services/repas.service';


@Component({
  selector: 'app-journal-alimentaire',
  templateUrl: './journal-alimentaire.component.html',
  styleUrls: ['./journal-alimentaire.component.css']
})
export class JournalAlimentaireComponent implements OnInit {
   repasConsommes: Repas[] = [];
  constructor( private repasService: RepasService) {}


  ngOnInit(): void {
      this.repasConsommes = this.repasService.getRepasConsommes();
  }

  toggleCosommation(repas: Repas): void {
    repas.consomme = !repas.consomme;
    this.recalculateCaloriesConsommees();
  }

  private recalculateCaloriesConsommees(): void {
    //Recalculer les calories consommées ici
  }

}
