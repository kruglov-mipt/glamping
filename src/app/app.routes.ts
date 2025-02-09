import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HousesComponent } from './pages/houses/houses.component';
import { EntertainmentComponent } from './pages/entertainment/entertainment.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { PlacesComponent } from './pages/places/places.component';
import { RulesComponent } from './pages/rules/rules.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { BookingComponent } from './pages/booking/booking.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'aframe', component: HousesComponent },
  { path: 'scandi', component: HousesComponent },
  { path: 'entertainment', component: EntertainmentComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'places', component: PlacesComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'booking', component: BookingComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
