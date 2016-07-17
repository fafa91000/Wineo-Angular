import {Injectable} from "@angular/core";
import {Bouteille} from "../domain/bouteille"

@Injectable()
export class BouteilleService {

    obtenirBouteilles() {
        return CAVE;
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
