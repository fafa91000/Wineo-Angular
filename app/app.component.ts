import {Component} from '@angular/core';
import {Bouteille} from './bouteille';
import {BouteilleDetailComponent} from './bouteille-detail.component';

@Component({
    selector: 'wineo',

    template: `
            <h1>Stockage de bouteille en ligne</h1>
            
            <div id="listeBouteilles">
                <h2>Liste des bouteilles</h2>
                
                <ul>
                    <li *ngFor="let bouteille of cave" (click)="onSelect(bouteille)">
                        <div>{{ bouteille.reference }}</div>
                    </li>
                </ul>
            </div>
            
            <bouteille-detail [bouteille]="bouteilleSelectionnee"></bouteille-detail>
        `,

    directives: [BouteilleDetailComponent]
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
