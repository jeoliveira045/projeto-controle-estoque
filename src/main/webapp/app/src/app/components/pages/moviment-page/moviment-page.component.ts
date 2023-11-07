import { Component, OnInit, Renderer2, ElementRef, ViewContainerRef} from '@angular/core';
import { MovimentService } from "../../../services/moviment.service";
import { Moviment} from "../../../domain/moviment";
import {Products} from "../../../domain/products";

@Component({
  selector: 'app-moviment-page',
  templateUrl: './moviment-page.component.html',
  styleUrls: ['./moviment-page.component.scss']
})
export class MovimentPageComponent implements OnInit {

  movimentArrayList: Array<Moviment> = new Array<Moviment>();

  valor: string = '';
  valor2: number = 0;
  valor3: number = 0;

  formDataChild: Products  = new Products();



  showAddMovimentacao: boolean = false;

  constructor(protected movService: MovimentService,private renderer: Renderer2,private elemRef: ElementRef) { }

  ngOnInit(): void {
    this.movService.findAll().subscribe(res => {
      for(let i of res){
        this.movimentArrayList.push(i)
      }
    })
  }

  addMovimentacao(){
    this.showAddMovimentacao = !this.showAddMovimentacao
  }

  movProdutos(){
    console.log(this.elemRef.nativeElement.querySelector(".addMovimentacao").querySelector('tbody').querySelectorAll('input'))
  }

  addProduto(){
    this.addNameRow()
    this.addQuantityRow()
    this.addUnitValueRow()
  }


  addNameRow(){
    const targetData = this.elemRef.nativeElement.querySelector('.productNameData')
    const targetInput = targetData.querySelector('.tableNameInput')
    const copy = targetInput.cloneNode(true)
    this.renderer.appendChild(targetData, copy)
  }

  addQuantityRow(){
    const targetData = this.elemRef.nativeElement.querySelector('.productQuantityData')
    const targetInput = targetData.querySelector('.tableQuantityInput')
    const copy = targetInput.cloneNode(true)
    this.renderer.appendChild(targetData, copy)
  }

  addUnitValueRow(){
    const targetData = this.elemRef.nativeElement.querySelector('.productUnitValueDatas')
    const targetInput = targetData.querySelector('.tableUnitValueInput')
    const copy = targetInput.cloneNode(true)
    this.renderer.appendChild(targetData, copy)
  }



}
