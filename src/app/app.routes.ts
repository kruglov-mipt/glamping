import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HousesComponent } from './pages/houses/houses.component';
import { EntertainmentComponent } from './pages/entertainment/entertainment.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'houses', component: HousesComponent },
    { path: 'entertainment', component: EntertainmentComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
