import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoPlayerComponent } from './app/video-player/video-player.component';
import { HeaderComponent } from './app/layout/header/header.component';
import { FooterComponent } from './app/layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoPlayerComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
