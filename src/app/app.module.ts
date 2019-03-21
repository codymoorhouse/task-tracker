import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TaskDetailsComponent } from './task-details.component';
import { TaskModalComponent } from './task-modal/task-modal.component';
@NgModule({
  declarations: [
    AppComponent,
    TaskDetailsComponent,
    TaskModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
