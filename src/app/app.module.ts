import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaisComponent } from './pages/pais/pais.component';
import { PaisesComponent } from './pages/paises/paises.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, PaisComponent, PaisesComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
