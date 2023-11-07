import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MovimentPageComponent} from "./components/pages/moviment-page/moviment-page.component";
import {ProductsPageComponent} from "./components/pages/products-page/products-page.component";
import {MovimentFormComponent} from "./components/pages/moviment-page/moviment-form/moviment-form.component";

const routes: Routes = [
  {path: "moviment", component: MovimentPageComponent},
  {path: "product", component: ProductsPageComponent},
  {path: "moviment/new", component: MovimentFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
