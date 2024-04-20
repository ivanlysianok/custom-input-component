import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoPageComponent } from './components/demo-page.component';

const routes: Routes = [
  {
    path: '',
    component: DemoPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoPageRoutingModule {}
