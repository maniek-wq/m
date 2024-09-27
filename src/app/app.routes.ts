import { Routes, RouterModule,provideRouter } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { AppComponent } from './app.component';
import { VenueRegisteredComponent } from './venue-registered/venue-registered.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '', 
        component: HomeComponent,
        title: 'Home Page',
        
    }, 
    {
        path: 'Registration', 
        component: RegistrationComponent,
        title: 'Registration',
        
    }, 
    {
        path: 'RegisteredVenue', 
        component: VenueRegisteredComponent,
        title: 'Registered',
        
    }, 
];


export default routes;
export class AppRoutingModule { }