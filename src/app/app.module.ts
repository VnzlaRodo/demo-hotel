import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SwiperModule } from 'swiper/angular';

import { AppComponent } from './app.component';
import { HomeComponent } from './layouts/home/home.component';
import { ContactComponent } from './layouts/contact/contact.component';
import { ExtraComponent } from './layouts/extra/extra.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CarrouselComponent } from './shared/carrousel/carrousel.component';
import { CarrouselEventComponent } from './shared/carrousel-event/carrousel-event.component';
import { ReservationComponent } from './layouts/reservation/reservation.component';
import { HabitationComponent } from './layouts/reservation/habitation/habitation.component';
import { SpaceEventComponent } from './layouts/reservation/space-event/space-event.component';
import { MainComponent } from './layouts/reservation/main/main.component';
import { CarrouselHabitationComponent } from './shared/carrousel-habitation/carrousel-habitation.component';
import { CarrouselSpacesComponent } from './shared/carrousel-spaces/carrousel-spaces.component';
import { HeaderComponent } from './shared/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,    
    ExtraComponent,
    NavbarComponent,
    FooterComponent,
    CarrouselComponent,
    CarrouselEventComponent,
    ReservationComponent,
    HabitationComponent,    
    SpaceEventComponent, MainComponent, CarrouselHabitationComponent, CarrouselSpacesComponent, HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SwiperModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
