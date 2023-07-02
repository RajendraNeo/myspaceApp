import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackgesComponent } from './pages/packges/packges.component';
import { PackgesActivationComponent } from './pages/packges-activation/packges-activation.component';
import { ClientComponent } from './pages/client/client.component';
import { UsersComponent } from './pages/users/users.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ClientadmindashboardComponent } from './pages/clientadmindashboard/clientadmindashboard.component';
import { ClientuserdashboardComponent } from './pages/clientuserdashboard/clientuserdashboard.component';
import { UserlayoutComponent } from './pages/userlayout/userlayout.component';
import { ClientlayoutComponent } from './pages/clientlayout/clientlayout.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { BookingComponent } from './pages/booking/booking.component';

const routes: Routes = [
  {
    path:"",component:LoginComponent
  },
  {
    path:"",component:HomeComponent,
    children:[ 
      {
        path:"packages", component:PackgesComponent
      },
      {
        path:"package-activation", component:PackgesActivationComponent
      },
      {
        path:"client", component:ClientComponent
      },
      {
        path:"users", component:UsersComponent
      },
      {
        path:"admin-dashboard", component:AdminDashboardComponent
      }
    ]
  },
  {
    path:"",
    component:ClientlayoutComponent,
    children:[
      {
        path:"client-dashboard",
        component:ClientadmindashboardComponent
      },
      {
        path:"rooms",
        component:RoomsComponent
      },
      {
        path:"booking",
        component:BookingComponent
      }
    ]
  },
  {
    path:"",
    component:UserlayoutComponent,
    children:[
      {
        path:"user-dashboard",
        component:ClientuserdashboardComponent
      }, 
      {
        path:"user-booking",
        component:BookingComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
