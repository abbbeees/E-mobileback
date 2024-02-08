import { Component } from '@angular/core';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent {
  articles = [
    { nom: 'Article 1', quantite: 2, prix: 20, image: '../../src/assets/image/pan/lolcase.png' },
    { nom: 'Article 2', quantite: 1, prix: 30, image: '../../src/assets/image/pan/lolcase.png' },
    { nom: 'Article 3', quantite: 3, prix: 15, image: '../../src/assets/image/pan/lolcase.png' }
    // Ajoutez d'autres articles selon vos besoins
  ];

  calculerTotal(): number {
    return this.articles.reduce((total, article) => total + article.prix * article.quantite, 0);
  }
}
