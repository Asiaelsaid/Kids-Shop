import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[CardStyle]',
})
export class CardStyleDirective implements OnChanges {
  @Input() valueTest: string = '30px';
  @Input('CardStyle') inputTest: string = '30px';
  // @Input('CardStyle') inputTest: string="blue";
  constructor(private element: ElementRef) {
    //this.element.nativeElement.style.borderRadius = `${this.inputTest}`//'70px';
  }
  //Day 3 [4]
  ngOnChanges(): void {
    this.element.nativeElement.style.borderRadius = `${this.inputTest}`; //'70px';
    // this.element.nativeElement.style.border = ` 1px solid ${this.inputTest} `//'70px';
    //throw new Error('Method not implemented.');
  }

  @HostListener('mouseover') funcOver() {
    this.element.nativeElement.style.borderRadius = `${this.valueTest}`; //`30px`;
    this.element.nativeElement.style.boxShadow = `2px 2px 2px 1px rgba(0, 0, 0, 0.2)`;
  }
  @HostListener('mouseout') funcOut() {
    this.element.nativeElement.style.borderRadius = `${this.inputTest}`; //`15px`;
    this.element.nativeElement.style.boxShadow = '';
  }
}
