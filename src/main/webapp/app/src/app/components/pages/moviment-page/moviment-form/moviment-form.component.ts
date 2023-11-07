import {Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {Form, FormControl} from '@angular/forms';
import {Products} from "../../../../domain/products";
import * as events from "events";
import {ProductItemDirectiveDirective} from "../../../../directives/product-item-directive.directive";

@Component({
  selector: 'app-moviment-form',
  templateUrl: './moviment-form.component.html',
  styleUrls: ['./moviment-form.component.scss']
})
export class MovimentFormComponent implements OnInit{

  @ViewChild(ProductItemDirectiveDirective, {static: true})
  appProductItemDirective!: ProductItemDirectiveDirective;

  movType: FormControl<any> = new FormControl<any>('')

  movimentTypeArrayList: Array<string> = ['ENTRADA', 'SAÍDA'];

  productArray: Array<Products> = new Array<Products>();

  index: number|null = null

  log(e:any){
    this.productArray.push(e)
  }

  constructor() { }

  ngOnInit() {}




}
