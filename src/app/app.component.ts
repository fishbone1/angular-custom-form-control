import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  firstName = new FormControl();
  form = new FormGroup({
    'firstName': this.firstName,
    'lastName': new FormControl(),
  });
}