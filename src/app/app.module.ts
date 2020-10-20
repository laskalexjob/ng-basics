import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { registerLocaleData } from '@angular/common';

import localeRu from '@angular/common/locales/ru';
import { PostFormComponent } from './post-form/post-form.component';
import { PostComponent } from './post/post.component';

registerLocaleData(localeRu, 'ru');

@NgModule({
  declarations: [AppComponent, PostFormComponent, PostComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
