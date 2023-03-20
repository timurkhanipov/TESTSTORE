import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { RouterModule, Routes } from '@angular/router';
import { BasketcounterComponent } from './components/basketcounter/basketcounter.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NavigationbarComponent } from './components/navigationbar/navigationbar.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { BasketReducers } from './store/reducers/basket/basket.reducer';

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
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    StoreModule.forFeature('basketItems', BasketReducers ),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
