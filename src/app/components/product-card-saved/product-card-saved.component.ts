import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card-saved',
  templateUrl: './product-card-saved.component.html',
  styleUrls: ['./product-card-saved.component.scss']
})
export class ProductCardSavedComponent {

  @Input() image: string;

  constructor(){
    this.image = "";
  }

}
