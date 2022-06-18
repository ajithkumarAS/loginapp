import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { RegisterComponent } from './register/register.component';
import { ListingComponent } from './listing/listing.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomService } from './service/custom.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CountryService } from './service/country.service';
import { SearchPipe } from './pipe/search.pipe';
import { MainloginComponent } from './mainlogin/mainlogin.component';
import { MainregComponent } from './mainreg/mainreg.component';
import { AuthService } from './auth/auth.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guard/auth.guard';
import { UserdataService } from './service/userdata.service';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerComponent,
    RegisterComponent,
    ListingComponent,
    LoginComponent,
    SearchPipe,
    MainloginComponent,
    MainregComponent,
    DashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
    
  ],
  providers: [CustomService,CountryService,UserdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
