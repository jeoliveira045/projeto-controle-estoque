import {Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges, ViewChild, ViewContainerRef} from '@angular/core';
import {Form, FormControl} from '@angular/forms';
import {Products} from "../../../../domain/products";
import * as events from "events";
import {ProductItemDirectiveDirective} from "../../../../directives/product-item-directive.directive";
import {MovimentProductItemComponent} from "./moviment-product-item/moviment-product-item.component";
import {ProductService} from "../../../../services/product.service";
import {NgForm} from "@angular/forms";
import {Moviment} from "../../../../domain/moviment";
import {MovimentService} from "../../../../services/moviment.service";

@Component({
  selector: 'app-moviment-form',
  templateUrl: './moviment-form.component.html',
  styleUrls: ['./moviment-form.component.scss']
})
export class MovimentFormComponent implements OnInit{

  // @ViewChild('myForm') myForm: NgForm;

  constructor(protected movimentService: MovimentService) {
    // this.myForm = form;
  }

  log2(e:any){
    let moviment: Moviment = new Moviment();
    moviment.movType = this.movType.value;
    moviment.products = this.productArray;
    console.log(moviment);
  }

  @ViewChild(ProductItemDirectiveDirective, {static: true})
  appProductItemDirective!: ProductItemDirectiveDirective;

  movType: FormControl<string|undefined> = new FormControl<any>('ENTRADA')

  movimentTypeArrayList: Array<string> = ['ENTRADA', 'SAIDA'];

  productArray: Array<Products> = new Array<Products>();

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
    })
  }

  addMoviment(){
    let moviment: Moviment = new Moviment();
    moviment.movType = this.movType.value;
    moviment.products = this.productArray;
    this.movimentService.insert(moviment);
  }



  ngOnInit() {}




}
