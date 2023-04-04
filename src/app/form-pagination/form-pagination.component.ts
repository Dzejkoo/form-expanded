import { Component } from '@angular/core';
import {
  AUTO_STYLE,
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
const DEFAULT_DURATION = 300;

@Component({
  selector: 'app-form-pagination',
  templateUrl: './form-pagination.component.html',
  styleUrls: ['./form-pagination.component.scss'],
  animations: [
    trigger('collapse', [
      state('false', style({ height: AUTO_STYLE, visibility: AUTO_STYLE })),
      state('true', style({ height: '0', visibility: 'hidden' })),
      transition('false => true', animate(DEFAULT_DURATION + 'ms ease-in')),
      transition('true => false', animate(DEFAULT_DURATION + 'ms ease-out')),
    ]),
  ],
})
export class FormPaginationComponent {
  collapsed = false;

  toggle() {
    this.collapsed = !this.collapsed;
  }

  expand() {
    this.collapsed = false;
  }

  collapse() {
    this.collapsed = true;
  }
}
