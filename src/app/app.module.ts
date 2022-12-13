import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { itemReducer } from './item.reducer';

export const environment = {
  production: false,
  enableDevTools: true,
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ count: counterReducer, items: itemReducer }),
    environment.enableDevTools ? StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }) : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
