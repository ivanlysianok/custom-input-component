import { DOCUMENT } from '@angular/common';
import {
  Directive,
  ElementRef,
  Inject,
  Input,
  OnChanges,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[requiredSymbol]',
})
export class RequiredSymbolDirective implements OnChanges {
  @Input() hasRequiredValidator = false;
  @Input() isRequired?: boolean;
  @Input() isDisabled?: boolean;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(): void {
    let displayRequiredSymbol = false;

    displayRequiredSymbol = this.hasRequiredValidator;

    if (this.isRequired !== undefined) {
      displayRequiredSymbol = this.isRequired;
    }

    this.elementRef.nativeElement.classList.toggle(
      'required',
      displayRequiredSymbol && !this.isDisabled
    );
  }
}
