import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent {

  control = new FormControl();

  observerChangeSearch(){
    this.control.valueChanges.subscribe(query => {
      console.log(query)
    })
  }

}
