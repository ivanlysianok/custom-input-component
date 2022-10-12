import { NgModule } from '@angular/core';
import { CustomInputModule } from '../custom-input/custom-input.module';
import { SharedModule } from '../shared/shared.module';
import { DemoPageComponent } from './components/demo-page.component';
import { DemoPageRoutingModule } from './demo-page-routing.module';

@NgModule({
  declarations: [DemoPageComponent],
  imports: [CustomInputModule, DemoPageRoutingModule, SharedModule],
  exports: [DemoPageComponent],
})
export class DemoPageModule {}
