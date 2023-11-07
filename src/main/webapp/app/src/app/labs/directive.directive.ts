import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDirective]'
})
export class DirectiveDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
