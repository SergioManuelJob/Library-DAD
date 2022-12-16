import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  products: Product[];
  public search: string = '';

  constructor(){
    this.products = [
      {
        title: "El Señor de los Anillos",
        image: "../../assets/images/libro1.jpg"
      },
      {
        title: "El Último Dickens",
        image: "../../assets/images/libro2.jpg"
      },
      {
        title: "Heridas Abiertas",
        image: "../../assets/images/libro3.png"
      },
      {
        title: "El Drama de Maylen",
        image: "../../assets/images/libro4.jpg"
      },
      {
        title: "Heridas Abiertas",
        image: "../../assets/images/libro5.jpeg"
      },
    ]
  }

}
