import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  products: Product[];

  constructor(){
    this.products = [
      {
        title: "El Señor de los Anillos",
        image: "../../assets/images/libro1.jpg"
      },
      {
        title: "El Drama de Maylen",
        image: "../../assets/images/libro4.jpg"
      },
    ]
  }

}
