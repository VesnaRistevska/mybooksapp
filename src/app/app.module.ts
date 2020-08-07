import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import {
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatTableModule,
  MatDividerModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { OktaAuthModule } from '@okta/okta-angular';

import 'hammerjs';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { DetailsComponent } from './components/details/details.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { RequestCacheService } from './cache/request-cache.service';
import { CachingInterceptorService } from './cache/caching-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    OktaAuthModule.initAuth({
      issuer: 'https://dev-108944.okta.com/oauth2/default',
      redirectUri: 'http://localhost:8080/implicit/callback',
      clientId: '0oaoii3r4qY0J9W734x6'
    }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: CachingInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
