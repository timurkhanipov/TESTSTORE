import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'main', loadChildren: () => import('./components/main/main.module').then(m => m.MainModule) },
  { path: 'basket', loadChildren: () => import('./components/basket/basket.module').then(m => m.BasketModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
