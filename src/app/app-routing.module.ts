import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './layouts/contact/contact.component';
import { ExtraComponent } from './layouts/extra/extra.component';
import { HomeComponent } from './layouts/home/home.component';
import { HabitationComponent } from './layouts/reservation/habitation/habitation.component';
import { MainComponent } from './layouts/reservation/main/main.component';
import { ReservationComponent } from './layouts/reservation/reservation.component';
import { SpaceEventComponent } from './layouts/reservation/space-event/space-event.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'reserva', component: ReservationComponent,
    children: [
      {path: '', component: MainComponent},
      {path: 'habitacion',component: HabitationComponent},
      {path: 'nuestros-espacios', component: SpaceEventComponent}
    ]
  },  
  
  {path: 'servicios', component: ExtraComponent},
  {path: 'contacto', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
