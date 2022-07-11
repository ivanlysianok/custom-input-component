import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorControlComponent } from './components/error-control.component';

@NgModule({
  declarations: [ErrorControlComponent],
  imports: [CommonModule],
  exports: [ErrorControlComponent],
})
export class ErrorControlModule {}
