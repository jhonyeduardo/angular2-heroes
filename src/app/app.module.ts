import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent }  from './app.component';
import { HeroDetailComponent }  from './pages/heroes/detail/hero-detail.component';
import { HeroesComponent }  from './pages/heroes/heroes.component';
import { HeroService }  from './providers/hero.service';
import { DashboardComponent }  from './pages/dashboard/dashboard.component';
import { HeroSearchComponent }  from './pages/heroes/search/hero-search.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroDetailComponent,
        HeroesComponent,
        HeroSearchComponent
    ],
    providers: [
        HeroService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
