import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartPageComponent } from './views/start-page/start-page.component';
import { HomeComponent } from './views/home/home.component';
import { ProfileComponent } from './views/profile/profile.component';
import { ContactComponent } from './views/contact/contact.component';
import { LogInComponent } from './views/log-in/log-in.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactBarComponent } from './components/contact-bar/contact-bar.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { ProductPageComponent } from './views/product-page/product-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ContactBarHomeComponent } from './components/contact-bar-home/contact-bar-home.component';
import { ProductCardSavedComponent } from './components/product-card-saved/product-card-saved.component';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    HomeComponent,
    ProfileComponent,
    ContactComponent,
    LogInComponent,
    NavbarComponent,
    ContactBarComponent,
    BookCardComponent,
    ProductPageComponent,
    ContactBarHomeComponent,
    ProductCardSavedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
