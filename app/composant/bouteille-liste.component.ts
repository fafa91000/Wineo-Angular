import {Component, OnInit} from '@angular/core';
import {Bouteille} from '../domain/bouteille';
import {BouteilleDetailComponent} from './bouteille-detail.component';
import {BouteilleService} from '../service/bouteille.service';

@Component({
    selector: 'bouteille-liste',

    template: `
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

export class BouteilleListeComponent implements OnInit {

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

        /*
         *  Nous résolvons de manière asynchrone l'opération.
         *  Nous obtenons une promesse de résultat du service des bouteilles.
         *  Lors que l'opération a été résolue (réussie ou échouée), nous obtenons les bouteilles.
         */
        this.bouteilleService.obtenirBouteilles().then(bouteilles => this.cave = bouteilles);
    }

    // Hook d'initialisation
    ngOnInit() {
        this.obtenirBouteilles();
    }

}
