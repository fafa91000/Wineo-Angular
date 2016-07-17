import {Component} from '@angular/core';

export class Bouteille {
    reference:string;
    designation:string;
    contenance:number;
    annee:number;
}

@Component({
    selector: 'wineo',

    template: `
            <h1>Stockage de bouteille en ligne</h1>
            
            <div id="listeBouteilles">
                <h2>Fiches des bouteilles</h2>
                
                <ul>
                    <li *ngFor="let bouteille of cave" (click)="onSelect(bouteille)">
                        <div>{{ bouteille.reference }}</div>
                    </li>
                </ul>
            </div>
         
            <div id="detailBouteille" *ngIf="bouteilleSelectionnee">
                <h2>Détail de la bouteille sélectionnée</h2>
                
                <div>Référence : {{ bouteilleSelectionnee.reference }}</div>
                <div>
                    <label>Désignation :</label>
                    <input [(ngModel)]="bouteilleSelectionnee.designation" />
                </div>
                <div>
                    <label>Année :</label>
                    <input [(ngModel)]="bouteilleSelectionnee.annee" />
                </div>
                <div>
                    <label>Contenance :</label>
                    <input [(ngModel)]="bouteilleSelectionnee.contenance" />
                </div>
            </div>
        `
})

export class AppComponent {

    cave = CAVE;

    bouteilleSelectionnee: Bouteille;

    onSelect(bouteille: Bouteille) {
        this.bouteilleSelectionnee= bouteille;
    }

}

const CAVE: Bouteille[] = [
    {
        reference: 'XFRDFOPZD',
        designation: 'Lambrusco',
        contenance: 0.75,
        annee: 2014
    },
    {
        reference: 'DUHGJWJE',
        designation: 'Sauvignon',
        contenance: 0.75,
        annee: 2011
    },
    {
        reference: 'PWETPWET',
        designation: 'Champagne',
        contenance: 1,
        annee: 2012
    },
    {
        reference: 'JAVACKK',
        designation: 'Chablis',
        contenance: 0.75,
        annee: 2011
    }
];
