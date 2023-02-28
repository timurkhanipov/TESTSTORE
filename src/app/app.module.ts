import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item/item.component';
import { DataService } from './services/data.service';
import { MainComponent } from './main/main/main.component';
import { BasketComponent } from './basket/basket/basket.component';
import { RouterModule, Routes } from '@angular/router';
import { BasketcounterComponent } from './basketcounter/basketcounter/basketcounter.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ItembasketComponent } from './itembasket/itembasket/itembasket.component';
import { TotalpriceComponent } from './totalprice/totalprice/totalprice.component';

const appRoutes: Routes = [
  {path: '', component: MainComponent},
  {path: 'basket', component: BasketComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    MainComponent,
    BasketComponent,
    BasketcounterComponent,
    ItembasketComponent,
    TotalpriceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [DataService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
