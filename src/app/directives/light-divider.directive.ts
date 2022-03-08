import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLightDivider]'
})
export class LightDividerDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.borderColor = 'rgba(127, 127, 127, 0.2)';
    this.el.nativeElement.style.borderStyle = 'dashed';
    this.el.nativeElement.style.margin = '20px 200px';
  }

}
