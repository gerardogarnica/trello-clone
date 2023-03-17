import { Component } from '@angular/core';
import { faBox, faWaveSquare, faClock } from '@fortawesome/free-solid-svg-icons';
import { faTrello } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html'
})
export class BoardComponent {
  faBox = faBox;
  faWaveSquare = faWaveSquare;
  faClock = faClock;
  faTrello = faTrello;

}
