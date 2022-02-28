import { Directive, HostListener, ElementRef  } from '@angular/core';

@Directive({
  selector: '[appClickColor]'
})
export class ClickColorDirective {
  toggle: boolean = false;

  constructor(private el: ElementRef) { }

  @HostListener('click') onClick() {
    this.toggle = !this.toggle;
    if(this.toggle)
      this.el.nativeElement.style.backgroundColor = 'yellow';
    else
      this.el.nativeElement.style.backgroundColor = 'white';
  }
}
