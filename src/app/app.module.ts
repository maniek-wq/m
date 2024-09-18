import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routes';
import { CommonService } from './common.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
 
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CommonService],
  bootstrap: [] 
})
export class AppModule { }