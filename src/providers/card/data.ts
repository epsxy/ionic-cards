import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Card } from '../../model/Card';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CardsProvider {
  cards: Card[];

  constructor(public http: HttpClient) {
    // console.log('Hello DataProvider Provider');
    this.cards = [new Card('Lorem ipsum dolor sit ame', 'consectetur adipiscing elit'),
    new Card('sed do eiusmod tempor incididunt ut labore', 'dolore magna aliqua'),
    new Card('Ut enim ad minim veniam', 'quis nostrud exercitation'),
    new Card('ullamco laboris nisi ut', 'ex ea commodo consequat'),
    new Card('Duis aute irure dolor', 'in reprehenderit in'),
    new Card('Excepteur sint occaecat', 'cupidatat non proident'),
    new Card('Sed ut perspiciatis', 'eos qui ratione'),
    new Card('dolorem ipsum quia', 'Nemo enim ipsam'),
    new Card('voluptas sit aspernatur', 'ad minim'),
    new Card('error sit voluptatem', 'veritatis et'),
    new Card('dolor sit amet', 'Neque porro quisquam'),
    new Card('nostrud exercitation', 'non proident')];
  }

  getInitCards(): Card[] {
    return this.cards;
  }

  filter(searchTerm: string): Card[] {
    return this.cards.filter(item => item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1)
  }

}
