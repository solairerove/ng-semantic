import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgSemanticModule } from '@solairerove/ng-semantic';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgSemanticModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
