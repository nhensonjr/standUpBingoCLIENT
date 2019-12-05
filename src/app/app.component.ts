import { Component, OnInit } from '@angular/core';
import { SpaceService } from './services/space/space.service';
import { Space } from './models/space.model';
import { CardService } from './services/card/card.service';
import { Card } from './models/card.model';

@Component({
  selector: 'app-root',
  template: `
    <div *ngIf="card">
      <div *ngFor="let row of card.rows">
        <span *ngFor="let space of row">--{{space.value}}--</span>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'standUpBingoCLIENT';
  allSpaces: Space[] = [];
  card: Card;

  constructor(private spaceService: SpaceService, private cardService: CardService) {
  }

  ngOnInit(): void {
    this.cardService.getCard().subscribe((newCard: Space[][]) => {
      this.card = new Card(newCard);
      console.log(this.card);
    });
  }

  populateSpaces() {
    const animals = [
      'mustang', 'bumble bee', 'dugong', 'impala', 'panther',
      'cow', 'muskrat', 'jackal', 'moose', 'pony',
      'mandrill', 'beaver', 'boar', 'squirrel', 'gopher',
      'cougar', 'musk-ox', 'mule', 'frog', 'duckbill platypus',
      'ferret', 'argali', 'octopus', 'buffalo', 'kangaroo'
    ];
    animals.forEach(x => {
      const space = new Space(null, x);
      this.spaceService.createSpace(space).subscribe();
    });
  }
}
