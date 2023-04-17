import { Component } from '@angular/core';
import {
  AUTO_STYLE,
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { FormControl, FormGroup } from '@angular/forms';
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
  cars: string[] = [];
  step: number = 1;
  dors = ['1', '2', '3', '4', '5'];
  models = ['Peugeot', 'BMW', 'Merceds'];
  prices = ['200', '300', '400'];
  types = ['sedan', 'cabriolet', 'mini'];
  formGroup = new FormGroup({
    chips: new FormControl(''),
    model: new FormControl(''),
  });

  delete(index: number) {
    this.cars.splice(index, 1);
  }

  nextStep(event: any) {
    this.cars.push(event.target.value);
    this.step = this.step + 1;
  }

  onSubmit() {}

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
