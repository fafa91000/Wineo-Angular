import {Component, Input} from "@angular/core";
import {Bouteille} from './bouteille';

@Component({

    selector: 'bouteille-detail',

    template: `
        <div id="detailBouteille" *ngIf="bouteille">
            <h2>Détail de la bouteille sélectionnée</h2>
            
            <div>Référence : {{ bouteille.reference }}</div>
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
        </div>
    `

})

export class BouteilleDetailComponent {

    @Input()
    bouteille: Bouteille;

}