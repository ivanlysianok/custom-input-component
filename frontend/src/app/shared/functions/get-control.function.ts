import { AbstractControl, FormControl } from '@angular/forms';

/**
 * This function is used to avoid type errors when binding form controls
 * @param control form control type of AbstractControl or null
 * @returns form control type of FormControl
 */
export function getControl(
  control: AbstractControl | null = null
): FormControl {
  return control as FormControl;
}
