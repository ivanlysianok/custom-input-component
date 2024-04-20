import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[requiredSymbol]',
})
export class RequiredSymbolDirective implements OnChanges {
  /**
   * Flag that is TRUE when control has Validators.required / Validators.requiredTrue, otherwise FALSE
   */
  @Input() hasRequiredValidator = false;
  /**
   * Flag which allows display required symbol (*) manually
   */
  @Input() isRequired?: boolean;
  /**
   * Flag that is TRUE when control is in disabled state, otherwise FALSE
   */
  @Input() isDisabled?: boolean;

  constructor(private elementRef: ElementRef) {}

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
