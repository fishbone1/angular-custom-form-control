import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormFieldComponent } from './form/form-field.component';

@NgModule({
  declarations: [
    AppComponent,
    FormFieldComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
