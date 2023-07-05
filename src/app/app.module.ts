import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PackgesComponent } from './pages/packges/packges.component';
import { ClientComponent } from './pages/client/client.component';
import { PackgesActivationComponent } from './pages/packges-activation/packges-activation.component';
import { UsersComponent } from './pages/users/users.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { UserlayoutComponent } from './pages/userlayout/userlayout.component';
import { ClientlayoutComponent } from './pages/clientlayout/clientlayout.component';
import { ClientadmindashboardComponent } from './pages/clientadmindashboard/clientadmindashboard.component';
import { ClientuserdashboardComponent } from './pages/clientuserdashboard/clientuserdashboard.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { ShortNamePipe } from './core/pipes/short-name.pipe';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { BookingComponent } from './pages/booking/booking.component';
import { LocalstorageComponent } from './localstorage/localstorage.component';
import { AllApicallInterceptor } from './core/interceptor/all-apicall.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    PackgesComponent,
    ClientComponent,
    PackgesActivationComponent,
    UsersComponent,
    LoginComponent,
    HomeComponent,
    UserlayoutComponent,
    ClientlayoutComponent,
    ClientadmindashboardComponent,
    ClientuserdashboardComponent,
    AdminDashboardComponent,
    ShortNamePipe,
    RoomsComponent,
    BookingComponent,
    LocalstorageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass:AllApicallInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
