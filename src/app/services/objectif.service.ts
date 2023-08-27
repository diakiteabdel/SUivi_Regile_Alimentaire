import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class ObjectifService {
    ObjectifCalorique: number = 2000;

    setObjectifCalorique(objectif: number): void {
        //Logique pour définir l'objectif caorique
    }

    getObjectifCalorique(): number {
        return this.ObjectifCalorique;
        //logique pour récupérer l'objectif calorique
    }
}