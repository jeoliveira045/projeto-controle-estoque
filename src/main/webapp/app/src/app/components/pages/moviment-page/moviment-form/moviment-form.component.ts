import {Component, DoCheck, OnInit, ViewChild} from '@angular/core';
import {Form, FormControl} from '@angular/forms';
import {Products} from "../../../../domain/products";

@Component({
  selector: 'app-moviment-form',
  templateUrl: './moviment-form.component.html',
  styleUrls: ['./moviment-form.component.scss']
})
export class MovimentFormComponent implements OnInit, DoCheck {

  name: FormControl<any> = new FormControl<any>('')

  quantity = new FormControl();

  unitValue = new FormControl();

  movType: FormControl<any> = new FormControl<any>('')

  movimentTypeArrayList: Array<string> = ['ENTRADA', 'SAÍDA'];

  productArray: Array<Products> = new Array<Products>();

  test: string = ''

  @ViewChild('inputElement')
  inputElement: any



  constructor() { }

  ngOnInit() {
  }

  addProduto(){
    let product = new Products()
    product.name = this.name.value;
    product.quantity = this.quantity.value;
    product.unityValue = this.unitValue.value;
    this.productArray.push(product)
    console.log(this.productArray)
  }

  ngDoCheck(){
    this.test = this.inputElement
    console.log(this.test)
  }


}
