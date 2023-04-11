import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CelularListComponent } from './celular-list/celular-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CelularFormComponent } from './celular-form/celular-form.component';
import { FormsModule } from '@angular/forms';
import { CelularService } from './celular.service';
@NgModule({
  declarations: [
    AppComponent,
    CelularListComponent,
    CelularFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    ],
  providers: [CelularService],
  bootstrap: [AppComponent]
})
export class AppModule { }
