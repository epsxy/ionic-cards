import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Card } from '../../model/Card';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import { CardsProvider } from '../../providers/card/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  cards: Card[];
  searchTerm: string  = '';
  searchControl: FormControl;

  constructor(public navCtrl: NavController, public cardsProvider: CardsProvider) {
    this.searchControl = new FormControl();
    this.cards = cardsProvider.getInitCards();
    this.searchControl.valueChanges.debounceTime(200).subscribe(() => this.setFilteredCards());
  }

  setFilteredCards() {
    this.cards = this.cardsProvider.filter(this.searchTerm);
  }
}
