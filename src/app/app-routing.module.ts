import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './views/contact/contact.component';
import { HomeComponent } from './views/home/home.component';
import { LogInComponent } from './views/log-in/log-in.component';
import { ProductPageComponent } from './views/product-page/product-page.component';
import { ProfileComponent } from './views/profile/profile.component';
import { StartPageComponent } from './views/start-page/start-page.component';

const routes: Routes = [
  {
    path: 'start',
    component: StartPageComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'logIn',
    component: LogInComponent,
  },
  {
    path: 'product',
    component: ProductPageComponent,
  },
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'start',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
