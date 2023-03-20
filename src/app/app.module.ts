import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainButtonComponent } from './components/main-button/main-button.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BoardComponent } from './pages/board/board.component';
import { BoardItemComponent } from './pages/board-item/board-item.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MainButtonComponent,
    NavBarComponent,
    BoardComponent,
    BoardItemComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    OverlayModule,
    AppRoutingModule,
    FontAwesomeModule,
    CdkAccordionModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
