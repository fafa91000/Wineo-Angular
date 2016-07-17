import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";

import {BouteilleService} from "./service/bouteille.service";


@Component({

    selector: 'wineo',

    template: `
        <h1>Stockage de bouteille en ligne</h1>
        
        <nav>
            <a [routerLink]="['/bouteilles']">Lister les bouteilles</a>
            <a [routerLink]="['/bouteille']">Ajouter une bouteille</a>
        </nav>
        <router-outlet></router-outlet>  
    `,

    directives: [ROUTER_DIRECTIVES],

    providers: [BouteilleService]

})

export class AppComponent {

}
