import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'primeflex', loadChildren: () => import('./primeflex/primeflex.module').then(m => m.PrimeflexModule) },
  { path: '', redirectTo: 'primeflex', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
