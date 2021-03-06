import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpTableComponent } from '../ep-table/ep-table.component';

import { GridModule } from '@progress/kendo-angular-grid';
import { OutsideEventsDirective } from '../directives';

@NgModule({
  imports: [
    CommonModule,
    GridModule
  ],
  declarations: [
    EpTableComponent,
    OutsideEventsDirective
  ],
  exports: [
    EpTableComponent
  ]
})
export class EpTableModuleModule { }
