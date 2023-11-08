import {Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges, ViewChild, ViewContainerRef} from '@angular/core';
import {Form, FormControl} from '@angular/forms';
import {Products} from "../../../../domain/products";
import * as events from "events";
import {ProductItemDirectiveDirective} from "../../../../directives/product-item-directive.directive";
import {MovimentProductItemComponent} from "../../../moviment-product-item/moviment-product-item.component";

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

  productArray: Array<Products|null> = new Array<Products|null>();

  verifyList(){
    console.log(this.productArray)
  }

  index: number|null = null

  log(e:any){
    this.productArray.push(e)
  }

  addProductItem(){
    const viewContainerRef = this.appProductItemDirective.viewContainerRef
    const componentRef = viewContainerRef.createComponent(MovimentProductItemComponent)
    componentRef.instance.eventProduct.subscribe(res => {
      this.log(res)
      componentRef.instance.index = this.productArray.indexOf(res)
    })
    componentRef.instance.closeEvent.subscribe(res => {
      this.productArray[componentRef.instance.index] = null
      componentRef.destroy()
    })
  }

  deleteProductItem(){

  }

  constructor() { }

  ngOnInit() {}




}
