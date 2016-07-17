import {Bouteille} from "../domain/bouteille";
import {Component} from "@angular/core";
import {BouteilleService} from "../service/bouteille.service";

@Component({

    selector: 'bouteille-creation',

    template:`
        <h2>Ajouter une nouvelle bouteille</h2>
        <div>
            <label>Référence :</label>
            <input [(ngModel)]="bouteille.reference" />
        </div>
        <div>
            <label>Désignation :</label>
            <input [(ngModel)]="bouteille.designation" />
        </div>
        <div>
            <label>Année :</label>
            <input [(ngModel)]="bouteille.annee" />
        </div>
        <div>
            <label>Contenance :</label>
            <input [(ngModel)]="bouteille.contenance" />
        </div>
        <button (click)="ajouterBouteille(bouteille)">OK</button>
    `

})

export class BouteilleCreationComponent {

    bouteille: Bouteille = new Bouteille();

    constructor(private bouteilleService: BouteilleService) { }

    ajouterBouteille(bouteille: Bouteille) {
        this.bouteilleService.ajouterBouteille(bouteille);
    }

}
