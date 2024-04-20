import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DemoPageModule } from './demo-page/demo-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, DemoPageModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
