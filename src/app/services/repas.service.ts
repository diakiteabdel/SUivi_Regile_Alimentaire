import { Injectable } from "@angular/core";
import { Repas } from "../models/repas.model";

@Injectable({
    providedIn: 'root'
})

export class RepasService {
    //tableau pour stocker les répas consommés
    repasConsommes: Repas[] = [];

    PlanifierRepas(nom: string, desc:string, calories:number): void {
        //Logique pour planifier un repas
    }

    getRepasConsommes(): Repas[] {
        return this.repasConsommes;
        //Logique pour récupérer un repas consommés
    }

    private generateUniqueId(): number{
        //logique pour gérer un identifiant unique
        
        return Math.floor(Math.random() * 1000);
    }
}