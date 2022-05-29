import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomControlsModule } from './custom-controls/custom-controls.module';
import { TestingAppModule } from './testing-app/testing-app.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    TestingAppModule,
    AppRoutingModule,
    CustomControlsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
