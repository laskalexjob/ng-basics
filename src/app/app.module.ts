import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { StyleDirective } from './directives/style.directive';
import { Style3Directive } from './directives/style3.directive';

@NgModule({
  declarations: [
    AppComponent,
    StyleDirective,
    Style3Directive
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {

}
