import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormPaginationComponent } from './form-pagination/form-pagination.component';

@NgModule({
  declarations: [AppComponent, FormPaginationComponent],
  imports: [BrowserModule, BrowserAnimationsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
