import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovimentPageComponent } from './components/pages/moviment-page/moviment-page.component';
import {HttpClientModule} from "@angular/common/http";
import { ProductsPageComponent } from './components/pages/products-page/products-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MovimentFormComponent } from './components/pages/moviment-page/moviment-form/moviment-form.component';
import { MovimentProductItemComponent } from './components/moviment-product-item/moviment-product-item.component';
import { ProductItemDirectiveDirective } from './directives/product-item-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    MovimentPageComponent,
    ProductsPageComponent,
    MovimentFormComponent,
    MovimentProductItemComponent,
    ProductItemDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
