import {Component, OnInit} from '@angular/core';
import {Bouteille} from './domain/bouteille';
import {BouteilleDetailComponent} from './composant/bouteille-detail.component';
import {BouteilleService} from './service/bouteille.service';

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

    directives: [BouteilleDetailComponent],

    providers: [BouteilleService]
})

export class AppComponent implements OnInit {

    // Collection de bouteilles de la cave
    cave: Bouteille[];

    // Bouteille sélectionnée
    bouteilleSelectionnee: Bouteille;

    // Constructeur public du composant
    constructor(private bouteilleService: BouteilleService) { }

    // Réagir à la sélection d'une bouteille dans la liste
    onSelect(bouteille: Bouteille) {
        this.bouteilleSelectionnee= bouteille;
    }

    // Obtenir toutes les bouteilles de la cave
    obtenirBouteilles() {
        this.cave = this.bouteilleService.obtenirBouteilles();
    }

    // Hook d'initialisation
    ngOnInit() {
        this.obtenirBouteilles();
    }

}
