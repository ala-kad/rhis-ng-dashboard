import { Component } from '@angular/core';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-card',
  imports: [
    NzCardModule,
    NzGridModule
  ],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {

}
