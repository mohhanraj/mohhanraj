import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { GridModule,PagerModule,EditService,ToolbarService } from '@syncfusion/ej2-angular-grids';
//import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdown;
// import { GridModule,PagerModule,EditService,ToolbarService } from '@syncfusion/ej2-angular-grids';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultistepComponent } from './multistep/multistep.component';




@NgModule({
  declarations: [
    AppComponent,
    MultistepComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FormsModule,
    GridModule,
    PagerModule,
  ],
  providers: [
    EditService,
    ToolbarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
