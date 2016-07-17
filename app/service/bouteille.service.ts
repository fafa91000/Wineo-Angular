import {Http, Headers} from "@angular/http";
import {Injectable} from "@angular/core";
import {Bouteille} from "../domain/bouteille";

@Injectable()
export class BouteilleService {

    // URL du WS d'obtention des bouteilles
    private urlWSBouteille: String = 'http://localhost:8080/tutu';

    constructor(private http: Http) { }

    /*
     *   Obtenir une promesse sur les bouteilles de la cave
     */
    obtenirBouteilles(): Promise<Bouteille[]> {

        // Nous consommons le WS
        return this.http
            .get(this.urlWSBouteille)
            .toPromise()
            .then(reponse => reponse.json().data);
    }

    /*
     * Ajouter une bouteille.
     */
    ajouterBouteille(bouteille: Bouteille) {

        // Nous préparons les paramètres d'entêtes
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        // Nous consommons le WS
        return this.http
            .post(this.urlWSBouteille, JSON.stringify(bouteille), {headers: headers})
            .toPromise()
            .then(reponse => reponse.json().data);
    }

}
