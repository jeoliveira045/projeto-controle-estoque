import {Products} from "./products";

export class Moviment{
  id?: number;
  movType?: string;
  movData?: Date;
  products?: Array<Products> = new Array<Products>();
}
