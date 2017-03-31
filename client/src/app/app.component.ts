import { Component } from '@angular/core';

@Component({
  selector: 'op-root',
  template: `
    <op-header></op-header>
    <section>
      <router-outlet></router-outlet>
    </section>
    <op-footer></op-footer>
  `,
  styles: [``]
})
export class AppComponent {
}
