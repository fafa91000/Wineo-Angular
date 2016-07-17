import { Component } from '@angular/core';

export class Bouteille {
    reference: string;
    designation: string;
    contenance: number;
    annee: number;
}

@Component({
    selector: 'wineo',

    template:
        `
            <h1>Stockage de bouteille en ligne</h1>
            
            <div>
                <h2>Fiche de la bouteille</h2>
                <div>{{ bouteille.reference }}</div>
                <div>{{ bouteille.designation }}</div>
                <div>{{ bouteille.annee }}</div>
                <div>{{ bouteille.contenance }}</div>
            </div>
            
            <div>
                <h2>Formulaire de modification</h2>
                <div>
                    <label>Référence :</label>
                    <input [(ngModel)]="bouteille.designation" placeholder="designation"/>
                </div>
                
                <div>
                    <label>Année :</label>
                    <input [(ngModel)]="bouteille.annee" placeholder="2000"/>
                </div>
                
                <div>
                    <label>Contenance :</label>
                    <input [(ngModel)]="bouteille.contenance" placeholder="0.75"/>
                </div>
            </div>
        `
})

export class AppComponent {

    bouteille: Bouteille = {
        reference: 'XFRDF',
        designation: 'Lambrusco',
        contenance: 0.75,
        annee: 2016
    };

}
