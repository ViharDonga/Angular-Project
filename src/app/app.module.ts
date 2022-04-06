import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';

import { EmployeeService } from './employee.service'
import { NewWarehouseLocationComponent } from './new-warehouse-location/new-warehouse-location.component';
@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    NewWarehouseLocationComponent


  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
