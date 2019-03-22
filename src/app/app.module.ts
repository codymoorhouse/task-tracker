import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TaskDetailsComponent } from './tasks/task-details/task-details.component';
import { TaskModalComponent } from './tasks/task-modal/task-modal.component';
@NgModule({
  declarations: [
    AppComponent,
    TaskDetailsComponent,
    TaskModalComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
