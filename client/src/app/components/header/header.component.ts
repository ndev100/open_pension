import { Component } from '@angular/core';

@Component({
  selector: 'op-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  intro() {
    introJs().start();
  }
}
