import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {ButtonComponent} from './button/button.component';
import {ScreenComponent} from './screen/screen.component';
import {BoardComponent} from './board/board.component';
import {BoardService} from './board.service';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ScreenComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [BoardService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
