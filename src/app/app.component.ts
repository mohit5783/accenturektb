import { Component } from '@angular/core';
import { NameDOBs } from 'app/ndMockData';
import { NameDOB } from './namedob.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'namedobsort';

  radioSelected: string;

  Peoples: NameDOB[] = NameDOBs;
  constructor() {
    this.Peoples = NameDOBs;
  }

  onItemChange(value) {
    if (value === "Name") {
      this.Peoples.sort((a, b) => (a.name > b.name ? 1 : -1));
    }
    else {
      this.Peoples.sort((a, b) => (new Date(b.dob).valueOf() - new Date(a.dob).valueOf()));
    }
  }
}
