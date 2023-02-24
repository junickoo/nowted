import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { MainEditorComponent } from './main-editor/main-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NotesListComponent,
    MainEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
