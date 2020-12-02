import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPageComponent } from "./my-page.component";
import { routing } from "./my-page.routing";


@NgModule({
  declarations: [
    MyPageComponent
  ],
  imports: [
    routing,
    CommonModule
  ],
  exports: [
    MyPageComponent
  ],
  bootstrap: [
    MyPageComponent
  ]
})
export class MyPageModule { }
