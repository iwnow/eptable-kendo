import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EpTableModuleModule } from './ep-table-module/ep-table-module.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EpTableModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
