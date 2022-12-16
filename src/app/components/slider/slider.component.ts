import { Component } from '@angular/core';
import { LoadScriptsService } from 'src/app/services/load-scripts.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {

  constructor(private loadScript: LoadScriptsService){
    loadScript.Load(["slider"]);
  }

}
