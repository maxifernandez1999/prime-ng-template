import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverflowComponent } from './components/overflow/overflow.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { DisplayComponent } from './components/display/display.component';



@NgModule({
  declarations: [
    OverflowComponent,
    DisplayComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
