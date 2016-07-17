import {Injectable} from "@angular/core";
import {Bouteille} from '../domain/bouteille';

@Injectable()
export class BouteilleService {

    // Obtenir une promesse sur les bouteilles de la cave
    obtenirBouteilles() {
        return Promise.resolve(CAVE);
    }

    // Obtenir une promesse sur les bouteilles de la cave avec de la latence
    obtenirBouteillesAvecDeLaLatence(tempsLatence: number) {
        return new Promise<Bouteille[]>(resolve => setTimeout(() => resolve(CAVE), tempsLatence));
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
