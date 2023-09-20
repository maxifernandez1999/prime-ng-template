import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverflowComponent } from './components/overflow/overflow.component';
import { DisplayComponent } from './components/display/display.component';

const routes: Routes = [
  { path: 'display', component: DisplayComponent },
  { path: 'overflow', component: OverflowComponent },
  { path: '', redirectTo: 'overflow', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
