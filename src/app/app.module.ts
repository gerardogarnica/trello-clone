import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DialogModule } from '@angular/cdk/dialog';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainButtonComponent } from './components/main-button/main-button.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TaskDialogComponent } from './components/task-dialog/task-dialog.component';
import { BoardComponent } from './pages/board/board.component';
import { BoardItemComponent } from './pages/board-item/board-item.component';
import { LoginComponent } from './pages/login/login.component';
import { ScrollComponent } from './pages/scroll/scroll.component';

@NgModule({
  declarations: [
    AppComponent,
    MainButtonComponent,
    NavBarComponent,
    TaskDialogComponent,
    BoardComponent,
    BoardItemComponent,
    LoginComponent,
    ScrollComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    OverlayModule,
    AppRoutingModule,
    FontAwesomeModule,
    CdkAccordionModule,
    DragDropModule,
    DialogModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
