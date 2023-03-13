import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { RouterModule, Routes } from '@angular/router';
import { BasketcounterComponent } from './components/basketcounter/basketcounter.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NavigationbarComponent } from './components/navigationbar/navigationbar.component';

const appRoutes: Routes = [
]

@NgModule({
  declarations: [
    AppComponent,
    BasketcounterComponent,
    NavigationbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
