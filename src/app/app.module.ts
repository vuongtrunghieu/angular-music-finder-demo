import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { FindMusicReducer } from './store/reducers/find-music.reducer';
import { EffectsModule } from '@ngrx/effects';
import { FindMusicEffects } from './store/effects/find-music.effects';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { SearchResultModelAdapter } from './store/models/search-result.model';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({searchResult: FindMusicReducer}),
    EffectsModule.forRoot([FindMusicEffects]),
    HttpClientModule,
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    FormsModule,
  ],
  providers: [SearchResultModelAdapter],
  bootstrap: [AppComponent],
})
export class AppModule { }
