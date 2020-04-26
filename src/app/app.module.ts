import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, Injectable } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestService } from './services/test.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import * as Sentry from "@sentry/browser";

Sentry.init({
  dsn: "https://7c14ae87a9194df981621e971969370a@o383629.ingest.sentry.io/5213903"
});

Sentry.configureScope((scope) => {
  scope.setUser({ 'email': 'tauhidul.islam@brainstation23.com' })
});

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
  constructor() { }
  handleError(error) {
    const eventId = Sentry.captureException(error.originalError || error);
    Sentry.showReportDialog({ eventId });
  }
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    TestService,
    { provide: ErrorHandler, useClass: SentryErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
