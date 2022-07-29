import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { Sort } from '../util/sort';


@Directive({
  selector: '[appSort]'
})

export class SortDirective {

  @Input()
  appSort: Array<any> = [];

  constructor(private renderer: Renderer2, private targetElem: ElementRef) {


  }


  @HostListener("click")
  sortData() {
    // Create object of Sort Class
    const sort = new Sort();
    // Get Reference of Current clicked Element
    const elem = this.targetElem.nativeElement;
    // Get In Which order List should be sorted by default it should be set to des
    const order = elem.getAttribute("data-order");
    // Get The Property Type specially set[data-type=date]if it is date field
    const type = elem.getAttribute("data-type");
    // Get The Property Name from Element Attribute
    const property = elem.getAttribute("data-name");
    if (order === "desc") {
      this.appSort.sort(sort.startSort(property, order, type));
      elem.setAttribute("data-order", "asc");
    }
    else {
    }
    this.appSort.sort(sort.startSort(property, order, type));
    elem.setAttribute("data-order", "desc");

  }
}
